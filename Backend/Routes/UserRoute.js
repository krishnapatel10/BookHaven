import { Router } from "express";
import usercontroller from "../controllers/usercontroller.js"

let router = Router()

router.get("/",usercontroller.getalluser)
router.get("/:id",usercontroller.getuserbyid)

router.post("/signup",usercontroller.createuser)
router.post("/login",usercontroller.loginuser)

router.put("/:id",usercontroller.updateuser)
router.delete("/:id",usercontroller.deleteuser)

export default router