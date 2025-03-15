import express from "express";
const router = express.Router();
router.get("/", (_request, response) => {
response.render("root", { title: "Gret site" });
});
export default router;