import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDF2Z_Lxc23NPkCi_2zWg_BGr4S5NqT9ag",
    authDomain: "nexusnet-efbcb.firebaseapp.com",
    projectId: "nexusnet-efbcb",
    storageBucket: "nexusnet-efbcb.appspot.com",
    messagingSenderId: "204073132085",
    appId: "1:204073132085:web:93a3dacf0ec6c60c85917c"
  };
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
