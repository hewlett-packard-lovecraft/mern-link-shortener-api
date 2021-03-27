import { Request, Response, Router } from "express";
// import { * } as validUrl from "valid-url"; // write yer own
import { nanoid } from "nanoid";
import * as config from "../config.json";

import Url from "../models/Url";

function isValidURL(str: string) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}

const router: Router = Router();

router.post("/", async (req: Request, res: Response) => {
  const { longUrl } = req.body;
  const baseURL: string = config.uri;
  const urlCode: string = nanoid(10);

  if (!isValidURL(baseURL)) {
    return res.status(401).json("Invalid base url");
  }

  try {
    let url = await Url.findOne({ longUrl });

    if (url) {
      res.json(url);
    } else {
      const shortUrl = baseURL + "/" + urlCode;

      url = new Url({
        longUrl,
        shortUrl,
        urlCode,
        date: new Date(),
      });

      await url.save();

      res.json(url);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
});

export default router;
