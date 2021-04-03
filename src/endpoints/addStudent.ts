import { Request, Response } from "express"
import connection from "../connection";
import { hobby, students } from "../types";


export default async function addStudents(
   req: Request,
   res: Response
): Promise<void> {

   try {

      const input: students = {
         nome: req.body.nome,
         email: req.body.email,
         data_nasc: req.body.data_nasc,
         turma_id: req.body.turma_id
      }

      const hobbys: hobby = {
         nome: req.body.nome,
         hobby: req.body.hobby
      }

      if ( !req.body.nome) {
         res.status(400).send('Invalid Parameters.')
      } else {
         await connection.raw(`
            INSERT INTO hobby (nome, hobby) VALUES (
               "${req.body.nome}",
               "${req.body.hobby}"
            )
         `)
      }

      if (!req.body.nome || !req.body.email || !req.body.data_nasc || !req.body.turma_id) {
         res.status(400).send('Invalid Parameters.')
      } else {
         await connection.raw(`
             INSERT INTO students (nome, email, data_nasc, turma_id)
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
