import app from "./app"
import addStudent from "./endpoints/addStudent"
import addTeacher from "./endpoints/addTeacher"
import createStudent from "./endpoints/createStudent"
import createTeacher from "./endpoints/createTeacher"
import getAge from "./endpoints/getAge"

app.put("/", addStudent);
app.put("/", addTeacher);
app.post("/", createStudent);
app.post("/", createTeacher);
app.get("/", getAge);
