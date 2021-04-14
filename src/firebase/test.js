import firebase from 'firebase/app'
import 'firebase/firestore'

const firestore = firebase.firestore()

//firestore query
firestore.collection('users').doc('oaGvt4Xc1QdUMmkd9CHk').collection('cartItem').doc('6Yj64YIP9hJTfWjSmzI5')
firestore.doc('/users/oaGvt4Xc1QdUMmkd9CHk/cartItem/6Yj64YIP9hJTfWjSmzI5')