import { Router } from "express";
import booksController from "../controllers/bookcontroller.js";


let router = Router()

router.get("/",booksController.getallbook)
router.get("/search",booksController.searchbook )

router.get("/:id",booksController.getbookbyid)
router.post("/",booksController.createbooks)
router.put("/:id",booksController.updatebook)
router.delete("/:id",booksController.deletebook)

// search router

//categories router
router.get("/category/:category",booksController.categorybook)

export default router;