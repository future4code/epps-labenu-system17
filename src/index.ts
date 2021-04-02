import app from "./app"
import addExpertises from "./endpoints/addExpertises"
import createClass from "./endpoints/createClass"
import createStudent from "./endpoints/createStudent"
import createTeacher from "./endpoints/createTeacher"
import getAge from "./endpoints/getAge"
import teacherExpertise from "./endpoints/teacherExpertise"

app.put("/especialidade", addExpertises);
app.post("/teacher-expertise", teacherExpertise);
app.put("/create-student", createStudent);
app.put("/create-teacher", createTeacher);
app.post("/create-class", createClass);
app.get("/get-age/:id", getAge);
