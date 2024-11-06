import { Request, Response } from 'express';
import { IndexService } from '../service/indexService';
import { CustomError } from '../errors/customErrors';

export class IndexController {

    constructor(private indexService: IndexService) { }

    private handleError = (error: unknown, res: Response) => {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message });
        }
        return res.status(500).json({ error: 'Internal server error' })
    }

    getTasks = async (req: Request, res: Response) => {
        try {
            const task = await this.indexService.getAllTasks();
            res.json(task);
        } catch (error) {
            this.handleError(error, res);
        }
    }

    createTask = async (req: Request, res: Response) => {
        const { task } = req.body;
        try {
            const newTask = await this.indexService.createTask(task);
            res.json(newTask);
        } catch (error) {
            this.handleError(error, res);
        }
    }

    updateTask = async (req: Request, res: Response) => {
        const { id } = req.params;
        const { task } = req.body;
        try {
            const updatedTask = await this.indexService.updateTask(Number(id), task);
            res.json(updatedTask);
        } catch (error) {
            this.handleError(error, res);
        }
    }

    deleteTask = async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
            const deletedTask = await this.indexService.deleteTask(Number(id));
            res.json(deletedTask);
        } catch (error) {
            this.handleError(error, res);
        }
    }

}