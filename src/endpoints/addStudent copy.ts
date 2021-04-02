import { Request, Response } from "express"


export default async function addStudents(
   req: Request,
   res: Response
): Promise<void> {

   try {

   } catch (error) {
      res.status(500).end()
   }
}