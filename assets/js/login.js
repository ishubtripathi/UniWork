  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
  import { getAuth ,GoogleAuthProvider, SignInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDtTy_uFVoDt6CklNo6RNDku1638ykqYvA",
    authDomain: "login-edcd1.firebaseapp.com",
    projectId: "login-edcd1",
    storageBucket: "login-edcd1.appspot.com",
    messagingSenderId: "245840613506",
    appId: "1:245840613506:web:9447268a0ab51f5dabe49b",
    measurementId: "G-QD5CPTZR71"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  auth.languageCode = 'en';
  const provider = new GoogleAuthProvider();
  const googleLogin = document.getElementById("");
  googleLogin.addEventListener("click", function(){

    signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user);
    window.location.href = ""
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  })