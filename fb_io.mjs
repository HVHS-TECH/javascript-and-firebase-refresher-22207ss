
import { initializeApp }
            

    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";

import { getDatabase }

    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

    var fb_gamedb

// Import the functions you need from the SDKs you need
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBlA52B3l-bQ7TaPAbpgWe7kFBEvWIfmcs",
    authDomain: "stanley-strik-13comp.firebaseapp.com",
    databaseURL: "https://stanley-strik-13comp-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "stanley-strik-13comp",
    storageBucket: "stanley-strik-13comp.firebasestorage.app",
    messagingSenderId: "593102123743",
    appId: "1:593102123743:web:2ef26555c75ba8d5c82f6a",
    measurementId: "G-WLN3K0MQB1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  import { getAuth, GoogleAuthProvider, signInWithPopup }

from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

    const AUTH = getAuth();

    const PROVIDER = new GoogleAuthProvider();

    // The following makes Google ask the user to select the account

    PROVIDER.setCustomParameters({

            prompt: 'select_account'


    });
       

    signInWithPopup(AUTH, PROVIDER).then((result) => {

        console.log("✅ Code for a successful authentication goes here");
            alert("succesfull auth");

    })

    .catch((error) => {

        console.log("error");

    });

