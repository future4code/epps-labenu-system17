import { Request, Response } from "express"
import  connection  from "../connection"


export default async function createStudent(
   req: Request,
   res: Response
): Promise<void> {

   try {
      let { id, nome, email, data_nasc, turma_id } = req.body

         await connection("students")
         .insert({id,  nome, email, data_nasc, turma_id})
         res.status(201).send({message: 'Class created succesfully'})


   } catch (error) {
      res.status(500).send({message: error.message || error.sqlMessage})
   }
}