import * as firebase from 'firebase';
import 'firebase/app';
require('firebase/app');
require('firebase/database');
require('firebase/firestore');
const config = {

    apiKey: "AIzaSyBYATrCeWITbX9xXCsxJapnWnImBquOkaU",
    authDomain: "next-doc.firebaseapp.com",
    databaseURL: "https://next-doc.firebaseio.com",
    projectId: "next-doc",
    storageBucket: "next-doc.appspot.com",
    messagingSenderId: "3489312543",
    appId: "1:3489312543:web:79c6ab600bd53cc8f50a2a"
    // apiKey: process.env.REACT_APP_APIKEY,
    // authDomain: process.env.REACT_APP_AUTHDOMAIN,
    // databaseURL: process.env.REACT_APP_DB,
    // projectId: process.env.REACT_APP_PID,
    // storageBucket: process.env.REACT_APP_SB,
    // messagingSenderId: process.env.REACT_APP_SID,
    // appId: process.env.REACT_APP_APPID,
    // measurementId:process.env.REACT_APP_MID
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const databaseRef = firebase.firestore()


export const postsRef = databaseRef
// export const postsRef = databaseRef.child("posts")



export default firebase;