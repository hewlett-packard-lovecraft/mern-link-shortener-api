import { Request, Response, Router } from "express";
import Url from "../models/Url";

const router: Router = Router();

router.get("/:code", async (req: Request, res: Response) => {
  try {
    const urlIsFound = await Url.findOne({ urlCode: req.params.code });

    if (urlIsFound) {
      return res.redirect(urlIsFound.longURL);
    } else {
      return res.status(404).json("URL cannot be found");
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Internal Server Error");
  }
});

export default router;
