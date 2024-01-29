import { firebaseApp } from './firebaseApp/firebaseInit';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth';

export const CreateUserEmailPassword = (emailpassword) => {
    const Email = emailpassword.providedEmail;
    const Password = emailpassword.providedPassword;

    createUserWithEmailAndPassword(auth, Email, Password)
    updateProfile(auth.currentUser, {
        displayName: Email,
        photoURL: "https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"
      }).then(() => {
        window.location.replace("www.mikeyfennelly1.github.io/CharlamagneDB/dashboard")
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
        window.location.replace("www.mikeyfennelly1.github.io/CharlamagneDB/dashboard")
    })
    .catch((err) => {
        console.log(err)
    })
}


export const auth = getAuth(firebaseApp);