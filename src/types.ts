export type students = {
    id: number,
    nome: string,
    email: string,
    data_nasc: Date,
    turma_id: number
};

export type hobby = {
    id: number,
    nome: string
}

export type students_hobby = {
    estudantes_id: number,
    passatempo_id: number
}

export type Class = {
    id: number,
    nome: string,
    data_inicio: Date,
    data_final: Date,
    modulo: number
};

export type Teacher = {
    id: number,
    nome: string,
    email: string,
    data_nasc: Date,
    turma_id: number
};

export type teacher_expertise = {
    docente_id: number,
    especialidade_id: number
};

export let classes: Class [] = []

