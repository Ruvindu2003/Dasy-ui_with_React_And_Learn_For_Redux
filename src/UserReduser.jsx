import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from './api';

// ==================== USER ASYNC THUNKS ====================
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await api.get('/student/getAll');
    return response.data;
});

export const fetchUserById = createAsyncThunk('users/fetchUserById', async (id) => {
    const response = await api.get(`/student/${id}`);
    return response.data;
});

export const addUserAsync = createAsyncThunk('users/addUser', async (user) => {
    const response = await api.post('/student/Add-Student', user);
    return response.data;
});

export const removeUserAsync = createAsyncThunk('users/removeUser', async (id) => {
    const response = await api.delete(`/student-Delete/${id}`);
    return response.data;
});

export const updateUserAsync = createAsyncThunk('users/updateUser', async (user) => {
    const response = await api.put('/student/update-Student', user);
    return response.data;
});

const initialUserState = {
    users: [],
    user: null,
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload);
        },
        removeUser: (state, action) => {
            state.users = state.users.filter((u) => u.id !== action.payload);
        },
        updateUser: (state, action) => {
            const idx = state.users.findIndex((u) => u.id === action.payload.id);
            if (idx !== -1) state.users[idx] = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            // fetch all users
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
            // fetch user by id
            .addCase(fetchUserById.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUserById.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(fetchUserById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
            // add user
            .addCase(addUserAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(addUserAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload);
            })
            .addCase(addUserAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
            // remove user
            .addCase(removeUserAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(removeUserAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.users = state.users.filter((u) => u.id !== action.payload.id);
            })
            .addCase(removeUserAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
            // update user
            .addCase(updateUserAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateUserAsync.fulfilled, (state, action) => {
                state.loading = false;
                const idx = state.users.findIndex((u) => u.id === action.payload.id);
                if (idx !== -1) state.users[idx] = action.payload;
            })
            .addCase(updateUserAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            });
    },
});

// ==================== STUDENT ASYNC THUNKS ====================
export const fetchStudents = createAsyncThunk('students/fetchStudents', async () => {
    const response = await api.get('/student/getAll');
    return response.data;
});

export const fetchStudentById = createAsyncThunk('students/fetchStudentById', async (id) => {
    const response = await api.get(`/student/${id}`);
    return response.data;
});

export const addStudentAsync = createAsyncThunk('students/addStudent', async (student) => {
    const response = await api.post('/student/Add-Student', student);
    return response.data;
});

export const removeStudentAsync = createAsyncThunk('students/removeStudent', async (id) => {
    const response = await api.delete(`/student/Student-Delete/${id}`);
    return response.data;
});

export const updateStudentAsync = createAsyncThunk('students/updateStudent', async (student) => {
    const response = await api.put('/student/update-Student', student);
    return response.data;
});

const initialStudentState = {
    students: [],
    student: null,
    loading: false,
    error: null,
};

const studentSlice = createSlice({
    name: 'student',
    initialState: initialStudentState,
    reducers: {
        addStudent: (state, action) => {
            state.students.push(action.payload);
        },
        removeStudent: (state, action) => {
            state.students = state.students.filter((s) => s.id !== action.payload);
        },
        updateStudent: (state, action) => {
            const idx = state.students.findIndex((s) => s.id === action.payload.id);
            if (idx !== -1) state.students[idx] = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            // fetch all students
            .addCase(fetchStudents.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchStudents.fulfilled, (state, action) => {
                state.loading = false;
                state.students = action.payload;
            })
            .addCase(fetchStudents.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
            // fetch student by id
            .addCase(fetchStudentById.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchStudentById.fulfilled, (state, action) => {
                state.loading = false;
                state.student = action.payload;
            })
            .addCase(fetchStudentById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
            // add student
            .addCase(addStudentAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(addStudentAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.students.push(action.payload);
            })
            .addCase(addStudentAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
            // remove student
            .addCase(removeStudentAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(removeStudentAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.students = state.students.filter((s) => s.id !== action.payload.id);
            })
            .addCase(removeStudentAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
            // update student
            .addCase(updateStudentAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateStudentAsync.fulfilled, (state, action) => {
                state.loading = false;
                const idx = state.students.findIndex((s) => s.id === action.payload.id);
                if (idx !== -1) state.students[idx] = action.payload;
            })
            .addCase(updateStudentAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            });
    },
});

// Export actions and reducers
export const { addUser, removeUser, updateUser } = userSlice.actions;
export const userReducer = userSlice.reducer;

export const { addStudent, removeStudent, updateStudent } = studentSlice.actions;
export default studentSlice.reducer;
