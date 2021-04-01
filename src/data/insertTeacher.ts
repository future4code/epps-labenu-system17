import connection from "../connection";

export default async function insertStudent(
    nome: string,
    email: string,
    data_nasc: Date,
    turma_id: number
) {
    await connection.insert({
        nome,
        email,
        data_nasc,
        turma_id
    }).into('teacher')
}