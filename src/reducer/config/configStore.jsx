import { configureStore } from "@reduxjs/toolkit";
import todos from "../Module/moduleSlice";

const store = configureStore({
    reducer: {
        todos,
    }
})

export default store;