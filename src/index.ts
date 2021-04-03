import app from "./app"
<<<<<<< HEAD
import addExpertises from "./endpoints/addExpertises"
=======

import addStudent from "./endpoints/addStudent"
import addTeacher from "./endpoints/addTeacher"
>>>>>>> 31c9b67af6de8d2060f5d18a73444d3d95359ad1
import createClass from "./endpoints/createClass"
import createStudent from "./endpoints/createStudent"
import createTeacher from "./endpoints/createTeacher"
import getAge from "./endpoints/getAge"
<<<<<<< HEAD
import teacherExpertise from "./endpoints/teacherExpertise"

app.put("/especialidade", addExpertises);
app.post("/teacher-expertise", teacherExpertise);
app.put("/create-student", createStudent);
app.put("/create-teacher", createTeacher);
app.post("/create-class", createClass);
app.get("/get-age/:id", getAge);
=======

app.put("/addStudent", addStudent);
app.put("/", addTeacher);
app.put("/create-student", createStudent);
app.post("/create-teacher", createTeacher);
app.post("/create-class", createClass);
app.get("/age/:id", getAge);
>>>>>>> 31c9b67af6de8d2060f5d18a73444d3d95359ad1
