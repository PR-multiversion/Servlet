const loginbtn = document.querySelector(".loginbtn");
const signupbtn = document.querySelector(".signupbtn");
const signup = document.querySelector(".signup");
const login = document.querySelector(".login");
//Signup input
const signname = document.querySelector(".signname");
const signemail = document.querySelector(".signemail");
const signpw = document.querySelector(".signpw");
//Login input
const loginemail = document.querySelector(".loginemail");
const loginpw = document.querySelector(".loginpw");

loginbtn.addEventListener('click', ()=>{
    signup.style.display = 'none';
    login.style.display = 'flex';
    loginbtn.style.backgroundColor = 'rgba(10, 46, 82, 0.897)';
    signupbtn.style.backgroundColor = 'white';
    loginbtn.style.color = 'white';
    signupbtn.style.color = 'black';
});
signupbtn.addEventListener('click', ()=>{
    signup.style.display = 'block';
    login.style.display = 'none';
    loginbtn.style.backgroundColor = 'white';
    signupbtn.style.color = 'white';
    loginbtn.style.color = 'black';
    signupbtn.style.backgroundColor = 'rgba(10, 46, 82, 0.897)';
    
});

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
  import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAf2KA1jvW9bNo1tB1e_zgQh4wTR6UcXZw",  
    authDomain: "storedata-b69d5.firebaseapp.com",
    projectId: "storedata-b69d5",
    storageBucket: "storedata-b69d5.appspot.com",
    messagingSenderId: "945160970715",
    appId: "1:945160970715:web:3c25924f47865d67be07fe"
  };
  /* const firebaseConfig = {
    apiKey: "AIzaSyBheWvbEcAo-R0ov8ntshJ9OsphxXNfXCM",
    authDomain: "exceldata-eaef4.firebaseapp.com",
    projectId: "exceldata-eaef4",
    storageBucket: "exceldata-eaef4.appspot.com",
    messagingSenderId: "723017876807",
    appId: "1:723017876807:web:5242c6fc0e2df13862f862"
  };
 */
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getDatabase(app);

  //signup event
  const btnsignup= document.querySelector(".btn1");
  btnsignup.onclick =()=>{
    let name = signname.value;
    let email = signemail.value;
    let password = signpw.value;
    if(name ==="")
    {
        alert("Enter username");
    }
    else
    {
        createUserWithEmailAndPassword(auth,email,password).then((userCredential)=>{
            const user = userCredential.user;
            set(ref(db, 'users/' + name), {
                username: name,
                email: email
              }).then(() => {
                // Data saved successfully!
                alert("Acccount created");
                //window.location.replace("/home.html");
              })
              .catch((error) => {
                // The write failed...
                alert(error);
              });
        }).catch((err)=>{
            alert(err.message);
        });
    }
  }

  //login event
  const btnlogin = document.querySelector(".btn2");
  btnlogin.onclick = ()=>{
    const email = loginemail.value;
    const password = loginpw.value;
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        alert("Login Successful");
        /* window.location.replace("/demo/add"); */
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
    });
  }
