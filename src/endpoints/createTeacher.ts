import { Request, Response } from "express"
import insertTeacher from "../data/insertTeacher"


export default async function createTeacher(
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


      await insertTeacher(
         req.body.nome,
         req.body.email,
         req.body.data_nasc,
         req.body.turma_id
      )
      res.status(200).send("Professor criado com sucesso!")


   } catch (error) {
      res.status(500).send({message: error.message || error.sqlMessage})
   }
}