import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore'
import { firebaseApp } from './firebaseApp/firebaseInit'

// init services
const db = getFirestore(firebaseApp)

// collection ref
const userAccountDetails = collection(db, 'userAccountDetails')

// get collection data
getDocs(userAccountDetails)
  .then((snapshot) => {
    let userAccountDetails = []
    snapshot.docs.forEach((doc) => {
      userAccountDetails.push({ ...doc.data(), id: doc.id })
    })
    // console.log("userAccountDetails: " + userAccountDetails)
  })
  .catch(err => {
    console.log(err.message)
  })

// adding documents
const addUserForm = (accountDetails) => {
  
  console.log(accountDetails)
  console.log("providedEmail: " + accountDetails.providedEmail)
  console.log("providedPassword: " + accountDetails.providedPassword)
  const CurrentDateAndTime = new Date();
  // console.log(CurrentDateAndTime)
  addDoc(userAccountDetails, {
      emailAddress: accountDetails.providedEmail,
      password: accountDetails.providedPassword,
      signedUpWhen: CurrentDateAndTime,
  })
  .then(() => {
      
  })
}

  // deleting documents


export const CreateAccount = (accountDetails) => {
  addUserForm(accountDetails)
}