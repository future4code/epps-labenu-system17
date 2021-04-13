import { Request, Response } from "express"
import connection from "../connection"
import insertTeacher from "../data/insertTeacher"
import { expertise, Teacher } from "../types"


export default async function createTeacher(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const input: Teacher = {
         nome: req.body.nome,
         email: req.body.email,
         data_nasc: req.body.data_nasc,
         turma_id: req.body.turma_id
      }

      if (!req.body.nome || !req.body.email || !req.body.data_nasc || !req.body.turma_id) {
         res.status(400).send('Invalid Parameters.')
      } else {
         await connection.raw(`
             INSERT INTO teacher (nome, email, data_nasc, turma_id)
             VALUES(
                 "${req.body.nome}",
                 "${req.body.email}",
                 "${req.body.data_nasc}",
                 ${req.body.turma_id}
             );
         `)
      }

      res.status(201).send({ message: 'Student created successfully' })

   } catch (error) {
      res.status(500).send("Error")
   }

}

