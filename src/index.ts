import app from "./app"

import addStudent from "./endpoints/addStudent"
import addTeacher from "./endpoints/addTeacher"
import createClass from "./endpoints/createClass"
import createStudent from "./endpoints/createStudent"
import createTeacher from "./endpoints/createTeacher"
import getAge from "./endpoints/getAge"

app.put("/addStudent", addStudent);
app.put("/", addTeacher);
app.put("/create-student", createStudent);
app.put("/create-teacher", createTeacher);
app.post("/create-class", createClass);
app.get("/age/:id", getAge);
