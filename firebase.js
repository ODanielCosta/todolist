// Import the functions you need from the SDKs you need
import
{
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import
{
    getAnalytics
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCfGcDwA4p7vHNq5S--ASMMZfWWIYX_oZA",
    authDomain: "to-do-a5930.firebaseapp.com",
    projectId: "to-do-a5930",
    storageBucket: "to-do-a5930.appspot.com",
    messagingSenderId: "204699507059",
    appId: "1:204699507059:web:165e0f254fb1a1a52f8d06",
    measurementId: "G-8WK2JH2KJH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function writeData ()
{
    firebase.database().ref("user").set({

        name: document.getElementById("sign-name").value,
        age: document.getElementById("sign-email").value

    });
}