CREATE TABLE class (
id INT NOT NULL PRIMARY KEY,
nome VARCHAR(50) NOT NULL,
data_inicio DATE NOT NULL,
data_final DATE NOT NULL,
modulo INT NOT NULL
);

CREATE TABLE teacher (
id INT NOT NULL PRIMARY KEY,
nome VARCHAR(50) NOT NULL,
email VARCHAR(50) NOT NULL UNIQUE,
data_nasc DATE NOT NULL,
turma_id INT NOT NULL,
FOREIGN KEY (turma_id) REFERENCES class(id)
);

CREATE TABLE expertise (
id INT NOT NULL PRIMARY KEY,
nome VARCHAR(50) NOT NULL
);

CREATE TABLE teacher_expertise (
docente_id_especialidade_id INT NOT NULL PRIMARY KEY,
docente_id INT NOT NULL,
especialidade_id INT NOT NULL,
FOREIGN KEY(docente_id) REFERENCES teacher(id),
FOREIGN KEY(especialidade_id) REFERENCES expertise(id)
);

CREATE TABLE students (
id INT NOT NULL PRIMARY KEY,
nome VARCHAR(50) NOT NULL,
email VARCHAR(50) NOT NULL UNIQUE,
data_nasc DATE NOT NULL,
turma_id INT NOT NULL,
FOREIGN KEY (turma_id) REFERENCES class(id)
);

CREATE TABLE hobby (
id INT NOT NULL PRIMARY KEY,
nome VARCHAR(50) NOT NULL
);

CREATE TABLE students_hobby (
estudantes_id_passatempo_id INT NOT NULL PRIMARY KEY,
estudantes_id INT NOT NULL,
passatempo_id INT NOT NULL,
FOREIGN KEY(estudantes_id) REFERENCES students(id),
FOREIGN KEY(passatempo_id) REFERENCES hobby(id)
);




