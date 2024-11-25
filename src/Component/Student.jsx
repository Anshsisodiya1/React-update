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
} from "@mui/material";
import './Student.css'

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
  const [showForm, setShowForm] = useState(false); // State to control form visibility

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
        // Edit the student if we are in editing mode
        dispatch(editStudent({ ...studentData, id: editingStudent.id }));
        setEditingStudent(null); // Reset editing state
      } else {
        // Add new student
        dispatch(addStudent(studentData));
      }
      setStudentData({ name: "", course: "", age: "", Batch: "" });
      setShowForm(false); // Hide the form after submission
    }
  };

  const handleEdit = (student) => {
    setStudentData(student);
    setEditingStudent(student);
    setShowForm(true); // Show form when editing
  };

  const handleDelete = (id) => {
    dispatch(deleteStudent(id));
  };

  return (
    <>
      {/* Toggle button for adding a new student */}
      {!showForm && (
        <Button
          variant="contained"
          color="primary"
          onClick={() => setShowForm(true)}
        >
          Add Student
        </Button>
      )}

      {/* Conditional rendering for the form */}
      {showForm && (
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={studentData.name}
            onChange={handleChange}
          />
          <TextField
            label="Course"
            name="course"
            value={studentData.course}
            onChange={handleChange}
          />
          <TextField
            label="Age"
            type="number"
            name="age"
            value={studentData.age}
            onChange={handleChange}
          />
          <TextField
            label="Batch"
            name="Batch"
            type="month"
            value={studentData.Batch}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained">
            {editingStudent ? "Update Student" : "Add Student"}
          </Button>
        </form>
      )}

      <TableContainer component={Paper} style={{ maxWidth: 600, margin: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Name</strong>
              </TableCell>
              <TableCell align="right">
                <strong>Age</strong>
              </TableCell>
              <TableCell align="right">
                <strong>Course</strong>
              </TableCell>
              <TableCell align="right">
                <strong>Batch</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Actions</strong>
              </TableCell>
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
