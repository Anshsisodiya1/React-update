import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addStudent, editStudent, deleteStudent } from "../Features/studentSlice";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./Student.css";

const Student = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.Students.students);

  const [studentData, setStudentData] = useState({
    name: "",
    course: "",
    age: "",
    Batch: "",
  });

  const [editingStudent, setEditingStudent] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    setStudentData({
      ...studentData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (studentData.name && studentData.course && studentData.age && studentData.Batch) {
      if (editingStudent) {
        dispatch(editStudent({ ...studentData, id: editingStudent.id }));
        setEditingStudent(null);
      } else {
        dispatch(addStudent(studentData));
      }
      setStudentData({ name: "", course: "", age: "", Batch: "" });
      setShowForm(false);
    }
  };

  const handleEdit = (student) => {
    setStudentData(student);
    setEditingStudent(student);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteStudent(id));
  };

  const handleClose = () => {
    setShowForm(false);
    setEditingStudent(null);
    setStudentData({ name: "", course: "", age: "", Batch: "" });
  };

  return (
    <>
      {/* Button to open the form */}
      <Button variant="contained" color="primary" onClick={() => setShowForm(true)}>
        Add Student
      </Button>

      {/* Full-screen Dialog */}
      <Dialog fullScreen open={showForm} onClose={handleClose}>
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography sx={{ flex: 1 }} variant="h6" component="div">
              {editingStudent ? "Edit Student" : "Add Student"}
            </Typography>
          </Toolbar>
        </AppBar>
        <form onSubmit={handleSubmit} style={{ padding: "20px" }} className="form-container" >
          <TextField
            label="Name"
            name="name"
            value={studentData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Course"
            name="course"
            value={studentData.course}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Age"
            type="number"
            name="age"
            value={studentData.age}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            // label="Batch"
            name="Batch"
            type="month"
            value={studentData.Batch}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: "20px" }}>
            {editingStudent ? "Update Student" : "Add Student"}
          </Button>
        </form>
      </Dialog>

      {/* Student Table */}
      <TableContainer component={Paper} style={{ maxWidth: 600, margin: "auto", marginTop: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell align="right"><strong>Age</strong></TableCell>
              <TableCell align="right"><strong>Course</strong></TableCell>
              <TableCell align="right"><strong>Batch</strong></TableCell>
              <TableCell align="center"><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.length > 0 ? (
              students.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>{student.name}</TableCell>
                  <TableCell align="right">{student.age}</TableCell>
                  <TableCell align="right">{student.course}</TableCell>
                  <TableCell align="right">{student.Batch}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleEdit(student)}
                      style={{ marginRight: "10px" }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleDelete(student.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No students available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Student;
