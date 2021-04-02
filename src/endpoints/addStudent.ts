import { Request, Response } from "express"
import connection from "../connection";
import { students } from "../types";


export default async function addStudents(
   req: Request,
   res: Response
): Promise<void> {

   try {



      const input: students = {
         nome: req.body.nome,
         data_inicio: req.body.data_inicio,
         data_final: req.body.data_final,
         modulo: req.body.modulo
      }

      if (!req.body.nome || !req.body.data_inicio || !body.data_final || !body.modulo) {
         res.status(400).send('Invalid Parameters.')
      } else {
         await connection.raw(`
             INSERT INTO class (nome, data_inicio, data_final, modulo)
             VALUES(
                 "${body.nome}",
                 "${body.data_inicio}",
                 "${body.data_final}",
                 "${body.modulo}",
             );
         `)}
            
         res.status(201).send({ message: 'Student created successfully' })

      } catch (error) {
         res.status(500).send("Error")
      }

   }
