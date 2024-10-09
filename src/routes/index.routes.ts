import { Router } from "express";
import { IndexService } from "../service/indexService";
import { IndexController } from "../controllers/indexController";


export class IndexRoutes {


  static get routes(): Router {

    const router = Router();

    const service = new IndexService();
    const controller = new IndexController(service);

    router.get("/test", controller.index);

    return router;
  }


}