import { Request, Response } from "express"
import  connection  from "../connection"

export default async function addTeacher(
   req: Request,
   res: Response
): Promise<void> {

   try {
     
   } catch (error) {
      res.status(500).send({message: error.message || error.sqlMessage})
   }
}