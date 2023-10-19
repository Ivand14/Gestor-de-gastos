import { configureStore } from "@reduxjs/toolkit"
import {reducer} from "./reducer"
import thunk from "redux-thunk"

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware:any) => getDefaultMiddleware({ thunk }),
});

export default store