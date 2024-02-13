import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore'
import { firebaseApp } from './firebaseApp/firebaseInit'

const db = getFirestore(firebaseApp)
const userAccountDetails = collection(db, 'userAccountDetails')

getDocs(userAccountDetails)
  .then((snapshot) => {
    let userAccountDetails = []
    snapshot.docs.forEach((doc) => {
      userAccountDetails.push({ ...doc.data(), id: doc.id })
    })
  })
  .catch(err => {
    console.log(err.message)
  })

const addUserForm = (accountDetails) => {
  const CurrentDateAndTime = new Date();
  addDoc(userAccountDetails, {
      emailAddress: accountDetails.providedEmail,
      password: accountDetails.providedPassword,
      signedUpWhen: CurrentDateAndTime,
  })
  .then(() => {
    window.location.replace("http://localhost:3000/dashboard");
  })
}



export const CreateAccount = (accountDetails) => {
  addUserForm(accountDetails)
}