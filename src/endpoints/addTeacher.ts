import { Request, Response } from "express"
import  connection  from "../connection"

export default async function addTeacher(
   req: Request,
   res: Response
): Promise<void> {

   try {
      let { id, nome, email, data_nasc, turma_id } = req.body

      await connection("teacher")
      .insert({id,  nome, email, data_nasc, turma_id})
      res.status(201).send({message: 'Class created succesfully'})


   } catch (error) {
      res.status(500).send({message: error.message || error.sqlMessage})
   }
}