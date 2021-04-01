import { Request, Response } from "express"
import { connection } from "../connection"


export default async function getAge(
   req: Request,
   res: Response
): Promise<void> {

   try {

      const id = req.params.id

      const result: any = connection.raw(`
         SELECT * FROM class WHERE id = ${id};
      `)
      
      res.status(201).send("ok " + result[0])                                                                                                                                                                              

   } catch (error) {
       res.status(400).send({
            message: error.message || error.sqlMessage
        })
   }
}

