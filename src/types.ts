export enum TYPE_CLASS {
    INTEGRAL = "integral",
    NOTURNA = "noturna",
}

export enum TYPE_TEACHER {
    REACT = "react",
    REDUX = "redux",
    CSS = "css",
    TESTES = "testes",
    TYPESCRIPT = "typescript",
    POOB = "POOB",
    BACKEND = "backend",
}

export enum TYPE_STUDENTS {
    FILMES = "filmes",
    VIDEOGAME = "videogame",
    VIOLAO = "violao"
}


export type students = {
    nome: string,
    email: string,
    data_nasc: Date,
    turma_id: number
};
export type hobby = {
    nome: string,
    hobby: TYPE_STUDENTS
}
export type students_hobby = {
    estudantes_id: number,
    passatempo_id: number
}
export type Class = {
    nome: string,
    data_inicio: Date,
    data_final: Date,
    modulo: number,
    tipo: TYPE_CLASS
};
export type Teacher = {
    nome: string,
    email: string,
    data_nasc: Date,
    turma_id: number    
};

export type expertise = {
    especialidade: TYPE_TEACHER
};
