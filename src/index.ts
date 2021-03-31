import app from "./app"
import addStudent from "./endpoints/addStudent"
import addTeacher from "./endpoints/addTeacher"
import createClass from "./endpoints/createClass"
import createStudent from "./endpoints/createStudent"
import createTeacher from "./endpoints/createTeacher"
import getAge from "./endpoints/getAge"

app.put("/", addStudent);
app.put("/", addTeacher);
app.post("/create-student", createStudent);
app.post("/create-teacher", createTeacher);
app.post("/create-class", createClass);
app.get("/", getAge);
