import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore'
import firebaseApp from './firebaseApp/firebaseInit'

// init services
const db = getFirestore(firebaseApp)

// collection ref
const colRef = collection(db, 'books')

// get collection data
getDocs(colRef)
  .then((snapshot) => {
    let books = []
    snapshot.docs.forEach((doc) => {
      books.push({ ...doc.data(), id: doc.id })
    })
    console.log(books)
  })
  .catch(err => {
    console.log(err.message)
  })

// adding documents
const addBookForm = () => {
e.preventDefault();

addDoc(colRef, {
    title: addBookForm.title.value,
    author: addBookForm.author.value,
})
.then(() => {
    addBookForm.reset()
})
}

  // deleting documents