import { getAuth } from 'firebase/auth';
import { firebaseApp } from './firebaseApp/firebaseInit';

export const auth = getAuth(firebaseApp);