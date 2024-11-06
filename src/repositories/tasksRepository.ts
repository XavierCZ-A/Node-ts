import { CreationAttributes } from "sequelize";
import Tasks from "../data/mysql/models/tasks";
import { CustomError } from "../errors/customErrors";

export class TaskRepository {
    async createTask(task: CreationAttributes<Tasks>): Promise<Tasks> {
        try {
            return Tasks.create(task);
        } catch (error) {
            console.error(error);
            throw CustomError.badRequest('Error al crear la tarea');
        }
    }

    async getTasks(): Promise<Tasks[]> {
        return Tasks.findAll();
    }

    async updateTask(id: number, updateData: Partial<Tasks>): Promise<[number]> {
        try {
            const updatedTask = await Tasks.update(updateData, {
                where: {
                    id
                }
            });
            return updatedTask;
        } catch (error) {
            console.error(error);
            throw CustomError.badRequest('Error al actualizar la tarea');
        }
    }

    async deleteTask(id: number): Promise<number> {
        try {
            const deletedTask = await Tasks.destroy({
                where: {
                    id
                }
            });
            return deletedTask;
        } catch (error) {
            console.error(error);
            throw CustomError.badRequest('Error al eliminar la tarea');
        }
    }
}

