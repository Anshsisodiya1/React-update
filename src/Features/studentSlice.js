import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  students: [
    { id: 1, name: "Ansh Sisodiya", course: "MERN", age: '18', Batch: "October" },
  ],
};

const studentSlice = createSlice({
  name: 'Students',
  initialState,
  reducers: {
    addStudent: (state, action) => {
      const { name, course, age, Batch } = action.payload;
      const objstudent = {
        id: nanoid(),
        name,
        course,
        age,
        Batch,
      };
      state.students.push(objstudent);
    },

    // Edit Student
    editStudent: (state, action) => {
      const { id, name, course, age, Batch } = action.payload;
      const studentIndex = state.students.findIndex((student) => student.id === id);

      if (studentIndex !== -1) {
        state.students[studentIndex] = {
          id, 
          name,
          course,
          age,
          Batch,
        };
      }
    },

    // Delete Student
    deleteStudent: (state, action) => {
      const id = action.payload;
      state.students = state.students.filter((student) => student.id !== id);
    },
  },
});

export const { addStudent, editStudent, deleteStudent } = studentSlice.actions;
export default studentSlice.reducer;
