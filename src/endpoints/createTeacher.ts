import { Request, Response } from "express"
import connection from "../connection"
import { expertise, Teacher, teacher_expertise } from "../types"
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
      // const especialidades: expertise = {
      //    especialidade: req.body.especialidade
      // }

      // if ( !req.body.especialidade) {
      //    res.status(400).send('Invalid Parameters test.')
      // } else {
      //    await connection.raw(`
      //       INSERT INTO expertise (especialidade) VALUES (
      //          "${req.body.especialidade}"
      //       )
      //    `)
      // }
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
      res.status(500).send({message: error.message || error.sqlMessage})
   }


  
}


// import { Request, Response } from "express"
// import insertTeacher from "../data/insertTeacher"


// export default async function createTeacher(
//    req: Request,
//    res: Response
// ): Promise<void> {

//    try {
//       if(
//          !req.body.nome ||
//          !req.body.email ||
//          !req.body.data_nasc ||
//          !req.body.turma_id
//       )
//       res.status(400).send("Campos obrigatorios")


//       await insertTeacher(
//          req.body.nome,
//          req.body.email,
//          req.body.data_nasc,
//          req.body.turma_id
//       )
//       res.status(200).send("Professor criado com sucesso!")


//    } catch (error) {
//       res.status(500).send({message: error.message || error.sqlMessage})
//    }
// }