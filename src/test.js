import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('TkMciaCSrrKTrDsydFIl').collection('cartItems').doc('gINrtb27wKoCyu1JXMv3')
firestore.doc('users/TkMciaCSrrKTrDsydFIl/cartItems/gINrtb27wKoCyu1JXMv3')
firestore.collection('users/TkMciaCSrrKTrDsydFIl/cartItems')