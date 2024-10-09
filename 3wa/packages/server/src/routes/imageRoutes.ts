import { Router } from "express";
import {
  uploadImage,
  uploadMultipleImages,
} from "../controllers/imagesController";
import upload from "../middlewares/updFileMiddleware";

const router = Router();

router.post("/upload", upload.single("image"), uploadImage);
router.post(
  "/upload-multiple",
  upload.array("images", 5),
  uploadMultipleImages
);

export default router;
