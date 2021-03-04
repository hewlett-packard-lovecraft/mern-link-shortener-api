import { Request, Response, Router } from "express";

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
  res.sendFile("/home/haoming/njs-projects/shortener-api/media/index.html");
});

export default router;
