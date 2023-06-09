import { Request, Response } from "express";
import expressRateLimit from "express-rate-limit";
import { AppError } from "../errors/erros";
import JsonFileStore from "./jsonFileStore.config";

export const midiaUploadRateLimit = expressRateLimit({
  store: new JsonFileStore("midiaUploadRateLimit.json"),
  windowMs: 30 * 60 * 1000, // 30 minutos
  max: 3,
  handler: function (req: Request, res: Response) {
    throw new AppError(
      "You have reached your video upload limit. Please try again later.",
      429
    );
  },
});
