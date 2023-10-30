import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDNhh2iPikg4DWi65mOwnGFsQU10idB9ew",
  authDomain: "rk-chatapp-b9901.firebaseapp.com",
  projectId: "rk-chatapp-b9901",
  storageBucket: "rk-chatapp-b9901.appspot.com",
  messagingSenderId: "827308459246",
  appId: "1:827308459246:web:eba2167ccf22e67ca8dfff"
};

export const app = initializeApp(firebaseConfig);