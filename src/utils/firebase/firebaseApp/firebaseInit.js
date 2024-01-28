import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseConfig'

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;