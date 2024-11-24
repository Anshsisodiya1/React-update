import React from 'react';
import {useSelector} from 'react-redux';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
  } from '@mui/material';

const Student = () => {

    const students = useSelector((state) => state.students.students);

  return(
    <TableContainer component={Paper} style={{ maxWidth: 600, margin: 'auto' }}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell><strong>Name</strong></TableCell>
          <TableCell align="right"><strong>Age</strong></TableCell>
          <TableCell align="right"><strong>Profession</strong></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {students.map((student) => (
          <TableRow key={student.id}>
            <TableCell>{student.name}</TableCell>
            <TableCell align="right">{student.age}</TableCell>
            <TableCell align="right">{student.profession}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
};

export default Student;
