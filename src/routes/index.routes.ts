import { Router } from "express";
import { IndexService } from "../service/indexService";
import { IndexController } from "../controllers/indexController";
import { TaskRepository } from "../repositories/tasksRepository";


export class IndexRoutes {


  static get routes(): Router {

    const router = Router();
    
    const taskRepository = new TaskRepository();
    const service = new IndexService(taskRepository);
    const controller = new IndexController(service);

    router.post("/createTask", controller.createTask);
    router.get("/allTasks", controller.getTasks);
    router.put("/updateTask/:id", controller.updateTask);
    router.delete("/deleteTask/:id", controller.deleteTask);

    return router;
  }

}