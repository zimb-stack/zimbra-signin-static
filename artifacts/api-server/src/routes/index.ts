import { Router, type IRouter } from "express";
import healthRouter from "./health";
import signinRouter from "./signin";

const router: IRouter = Router();

router.use(healthRouter);
router.use(signinRouter);

export default router;
