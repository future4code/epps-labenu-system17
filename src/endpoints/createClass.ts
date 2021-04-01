import { Request, Response } from "express"
import  connection  from "../connection"


export default async function createClass(
   req: Request,
   res: Response
): Promise<void> {

   try {
      const { id, nome, data_inicio, data_final, modulo } = req.body
      await connection("class")
         .insert({id,  nome, data_inicio, data_final, modulo})
         res.status(201).send({message: 'Class created succesfully'})

         // res.status(201).send({message: 'Class created succesfully'})

   } catch (error) {
      res.status(500).send({message: error.message || error.sqlMessage})
   }
}