import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";
import doctorReducer from "./doctorReducer";
import {firestoreReducer} from  'redux-firestore';
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
    auth:authReducer,
    project:projectReducer,
    doctor:doctorReducer,
    firestore:firestoreReducer,
    firebase:firebaseReducer

});

export default rootReducer;