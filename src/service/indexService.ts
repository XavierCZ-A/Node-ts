import Tasks from "../data/mysql/models/tasks";
import { CustomError } from "../errors/customErrors";
import { TaskRepository } from "../repositories/tasksRepository";

export class IndexService {

    // Inyecta el repositorio en el constructor
    constructor(private taskRepository: TaskRepository) {
        this.taskRepository = taskRepository;
    }

    async getAllTasks() {
        try {
            const tasks = await this.taskRepository.getTasks();
            return tasks;
        } catch (error) {
            console.error(error);
            throw CustomError.badRequest('Error al obtener las tareas');
        }
    }

    async createTask(task: Omit<Tasks, 'id'>) {
        try {
            const createdTask = await this.taskRepository.createTask(task);
            return createdTask;
        } catch (error) {
            console.error(error);
            throw CustomError.badRequest('Error al crear la tarea');
        }
    }

    async updateTask(id: number, task: Partial<Tasks>) {
        const updatedTask = await this.taskRepository.updateTask(id, task);
        if (updatedTask[0] === 0) {
            throw CustomError.badRequest('La tarea no existe');
        }
        try {
            return updatedTask;
        } catch (error) {
            console.error(error);
            throw CustomError.badRequest('Error al actualizar la tarea');
        }
    }

    async deleteTask(id:number) {
        const task = await this.taskRepository.deleteTask(id);
        if (task === 0) {
            throw CustomError.badRequest('La tarea no existe');
        }

        try {
            return task;
        } catch (error) {
            console.error(error);
            throw CustomError.badRequest('Error al eliminar la tarea');
        }
    }
}
