import express from 'express';
import TimeCtrl from "./timestamp.controller.js";

const router = express.Router();

router.route("/:date?").get(TimeCtrl.apiGetConvertion);

export default router
