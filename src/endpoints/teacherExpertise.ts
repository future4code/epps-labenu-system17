import { Request, Response } from "express"
import  connection  from "../connection"
import { teacher_expertise } from "../types"

export default async function teacherExpertise(
   req: Request,
   res: Response
): Promise<void> {

   try {
      console.log()
      const resultExpertise : teacher_expertise = {
         docente_id: req.body.docente_id,
         especialidade_id: req.body.especialidade_id
      }
      await connection.raw(`

      INSERT INTO teacher_expertise (docente_id, especialidade_id)
             VALUES(
               ${req.body.docente_id},
               ${req.body.especialidade_id}
                )
   `)
   res.status(201).send({ message: 'Student created successfully' })


   } catch (error) {
      res.status(500).send({message: error.message || error.sqlMessage})
   }
}