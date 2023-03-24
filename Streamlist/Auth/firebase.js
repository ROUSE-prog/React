import { firebase } from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBFI-U5ewcxPbO7T91w5C2NziMbuSEYtv8",
    authDomain: "streamlist-42451.firebaseapp.com",
    databaseURL: "https://streamlist-42451-default-rtdb.firebaseio.com",
    projectId: "streamlist-42451",
    storageBucket: "streamlist-42451.appspot.com",
    messagingSenderId: "317354407685",
    appId: "1:317354407685:web:2c14cc36fc5a395f96a96c",
    measurementId: "G-K89WQQ36C0"
};

firebase.initializeApp(firebaseConfig);

export default firebase;