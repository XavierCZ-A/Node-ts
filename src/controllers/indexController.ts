import { Request, Response } from 'express';
import { IndexService } from '../service/indexService';

export class IndexController {

    constructor(private indexService: IndexService) { }

     index = async (req: Request, res: Response) => {
        const message = await this.indexService.index('Hello World');
        res.json(message);
    }

}