import { Request, Response } from "express"
import connection from "../connection"
import { expertise} from "../types"


export default async function addExpertises(
   req: Request,
   res: Response
): Promise<void> {

   try {
      const especialidades: expertise = {
         especialidade: req.body.especialidade
      }

      if ( !req.body.especialidade) {
         res.status(400).send('Invalid Parameters test.')
      } else {
         await connection.raw(`
            INSERT INTO expertise (nome) VALUES (
               "${req.body.especialidade}"
            )
         `)
         res.status(201).send({ message: 'Student created successfully' })

      }


   } catch (error) {
      res.status(500).send({message: error.message || error.sqlMessage})
   }
}