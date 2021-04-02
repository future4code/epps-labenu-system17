import { Request, Response } from "express"
import  connection  from "../connection"
import { Class, TYPE_CLASS } from "../types"


export default async function createClass(
   req: Request,
   res: Response
): Promise<void> {

   try {
      let errorCode = 400;

      const input: Class = {
         nome: req.body.nome, 
         data_inicio:req.body.data_inicio, 
         data_final:req.body.data_final, 
         modulo: 0,
         tipo: req.body.tipo
      }

      if(!input.nome || !input.data_inicio ||
          !input.data_final || !input.tipo) {
            errorCode = 422;
            throw new Error("Campos obrigatorios!")
          }
      
      if(input.tipo !== TYPE_CLASS.INTEGRAL && input.tipo !== TYPE_CLASS.NOTURNA) {
             errorCode = 422;
            throw new Error("Campos obrigatorios!")

          }
      if(input.tipo === TYPE_CLASS.NOTURNA) {
         input.nome = input.nome +="-na-night";
      }    
          await connection.raw(`
          INSERT INTO class ( nome, data_inicio, data_final, modulo)
          VALUES(
              "${req.body.nome}",
              "${req.body.data_inicio}",
              "${req.body.data_final}",
               ${input.modulo}
          );
      `);  
      res.status(201).send({ message: 'Class created successfully' })  

   } catch (error) {
      res.status(500).send({message: error.message || error.sqlMessage})
   }
}