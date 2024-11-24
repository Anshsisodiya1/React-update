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
                const objstudent = {
                    id: nanoid(),
                    text: action.payload,
                  };
                state.Students.push(objstudent.payload);
            },
    },
});

export const {addStudent,removeStudent} = studentSlice.actions;
export default studentSlice.reducer;