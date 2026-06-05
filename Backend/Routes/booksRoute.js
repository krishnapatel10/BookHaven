import { Router } from "express";
import booksController from "../controllers/bookcontroller.js";


let router = Router()

router.get("/",booksController.getallbook)
router.get("/search",booksController.searchbook )
router.get("/category/:category",booksController.categorybook)

router.get("/:id",booksController.getbookbyid)
router.post("/",booksController.createbooks)
router.put("/:id",booksController.updatebook)
router.delete("/:id",booksController.deletebook)

// search router

//categories router

export default router;