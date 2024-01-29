import { firebaseApp } from './firebaseApp/firebaseInit';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

export const CreateUserEmailPassword = (emailpassword) => {
    const Email = emailpassword.providedEmail;
    const Password = emailpassword.providedPassword;

    createUserWithEmailAndPassword(auth, Email, Password)
        .then(() => {
            const displayName = Email;
            const photoURL = "https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png";
        })
        .then(() => {
            console.log("changing wl")
            window.location.replace("http://localhost:3000/CharlamagneDB/dashboard")
        })
        .catch((err) => {
            console.log(err)
        })
}
 
export const auth = getAuth(firebaseApp);