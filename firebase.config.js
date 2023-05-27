import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDInX-N2ndBfgi-wLA6-pfFCJ5FZxiJBg8",
    authDomain: "nexusnet-388004.firebaseapp.com",
    projectId: "nexusnet-388004",
    storageBucket: "nexusnet-388004.appspot.com",
    messagingSenderId: "722995655656",
    appId: "1:722995655656:web:9cfbb8ef71e8871ca72a5d"
};
  
const app = initializeApp(firebaseConfig);

const authentication = getAuth(app)

export { authentication };