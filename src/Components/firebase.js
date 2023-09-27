import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBYaVH1BY53wB6fDXgCKAE5TuJyeQsZ-gQ",
    authDomain: "pomodrotimer-7bf64.firebaseapp.com",
    projectId: "pomodrotimer-7bf64",
    storageBucket: "pomodrotimer-7bf64.appspot.com",
    messagingSenderId: "462125704202",
    appId: "1:462125704202:web:08d864ad38fd714c612bf3"
};

// firebase.initializeApp(firebaseConfig);
// export default firebase;
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
