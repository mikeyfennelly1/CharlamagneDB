import { firebaseApp } from './firebaseApp/firebaseInit';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { constructUrl } from '../utils/urlutils';

export const CreateUserEmailPassword = (emailpassword) => {
    const Email = emailpassword.providedEmail;
    const Password = emailpassword.providedPassword;

    createUserWithEmailAndPassword(auth, Email, Password)
    updateProfile(auth.currentUser, {
        displayName: Email,
        photoURL: "https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"
      }).then(() => {
        window.location.replace(constructUrl("/dashboard"))
        // dashboard
    }).catch((err) => {
        console.log(err)
    })
}
 
export const LoginUserEmailPassword = (emailpassword) => {
    const Email = emailpassword.providedEmail;
    const Password = emailpassword.providedPassword;

    signInWithEmailAndPassword(auth, Email, Password)
    .then(() => {
        console.log("changing wl")
        window.location.replace(constructUrl("/dashboard"))
        // dashboard
    })
    .catch((err) => {
        console.log(err)
    })
}

export const SignOutUser = () => {
    window.location.replace(constructUrl("/dashboard"))
    signOut(auth)
}

export const auth = getAuth(firebaseApp);