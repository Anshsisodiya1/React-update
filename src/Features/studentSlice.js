import {createSlice, nanoid} from '@reduxjs/toolkit';
import Student from '../Component/Student';

const initialState ={
     Students: [
         {id:1, name: 'Ansh Sisodiya', course: 'MERN', Batch: 'October', change: 'Edit'}
     ],
};

const studentSlice = createSlice({
    name: 'Students',
    initialState,
    reducers: {
            addStudent: (state,action) => {
                state.Students.push(action.payload);
            },
            removeStudent: (state,action) => {
                state.Students = state.Students.filter(
                    (Students) => Students.id !== action.payload
                );
            },
    },
});

export const {addStudent,removeStudent} = studentSlice.actions;
export default studentSlice.reducer;