import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
import api from "../../api/api";


const initialState = {
    todos: [],
    isLodaing:false,
    isError:false,
    error:null
}

export const __getTodo = createAsyncThunk(
    "GET_TODO",
    async (payload , thunkAPI) => {
        try {
            const {data} = await api.get('/todos')
            return thunkAPI.fulfillWithValue(data)
        } catch(error) {
            console.log('error',error);
            return thunkAPI.rejectWithValue(error)
            
        }
    }
);

export const __addTodo = createAsyncThunk(
    "ADD_TODO",
    async (payload) => {
        // console.log(payload);
        await api.post('/todos',payload) 
    }
);

export const __deleteTodo = createAsyncThunk(
    "DELETE_TODO",
    async (id) => {
        await api.delete(`/todos/${id}`)
    }
    //무조건 성공했을때만 보여지니까 비추...//Requst를 했을때 바로 무슨에러인지 안보여줌..(ex)404,500,?이런거 안보여줌)

);

export const __fixTodo = createAsyncThunk(
    "FIX_TODO",
    async (payload , thunkAPI) => {

        try {
            const response = await api.patch(`/todos/${payload.id}`,payload)//payload.id= 설정해준 아이디
            return thunkAPI.fulfillWithValue(response.data)
        } catch(error) {
            return thunkAPI.rejectWithValue(error)
            
        }
    }
);

const todosSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{},
    extraReducers:{
        [__getTodo.pending]: (state,action) => {
            state.isLodaing = true;
            state.isError = false;
        },
        [__getTodo.rejected]: (state,action) => {
            state.isLodaing = false;
            state.isError = true;
        },
        [__getTodo.fulfilled]: (state,action) => {
            state.isLodaing = false;
            state.isError = false;
            state.todos = action.payload;
        },
        //action.payload=>위에 payload가 넘어온다.
        [__fixTodo.fulfilled]: (state, action) => {
            const ChangeId = action.payload.id
            const fixStateIndex = state.todos.findIndex((item)=>item.id === ChangeId)
            const newTodos = [...state.todos]
            state.isLoading = false;
            state.isError = false;
            state.todos = newTodos.splice(fixStateIndex,1,action.payload)
        },
        [__fixTodo.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.payload;
        },
    }
})

// export const {} = todosSlice.actions;
export default todosSlice.reducer;
