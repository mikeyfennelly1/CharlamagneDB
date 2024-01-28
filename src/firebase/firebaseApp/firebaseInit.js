import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseConfig'

console.log(firebaseConfig)
export const firebaseApp = initializeApp(firebaseConfig);
console.log(firebaseApp)
