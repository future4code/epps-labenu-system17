import { Request, Response } from "express"
import  insertStudent from "../data/insertStudent"


export default async function createStudent(
   req: Request,
   res: Response
): Promise<void> {

   try {

      if(
         !req.body.nome ||
         !req.body.email ||
         !req.body.data_nasc ||
         !req.body.turma_id
      )
      res.status(400).send("Campos obrigatorios")

         await insertStudent(
            req.body.nome,
            req.body.email,
            req.body.data_nasc,
            req.body.turma_id
         )
   } catch (error) {
      res.status(500).send({message: error.message || error.sqlMessage})
   }
}