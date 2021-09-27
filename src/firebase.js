// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
  FirebaseRealTimeSaga
} from 'react-admin-firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCOqy0VmncTOh1RdBWJYF024Cemc1x4hRQ",
  authDomain: "clone-fe312.firebaseapp.com",
  projectId: "clone-fe312",
  storageBucket: "clone-fe312.appspot.com",
  messagingSenderId: "597705154118",
  appId: "1:597705154118:web:da8fb5ec8a623288e27447",
  measurementId: "G-WCCKZPSGPQ"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();
const auth = firebaseapp.auth();

const dataProvider = FirebaseDataProvider(firebaseConfig, {
  logging: true,
  // rootRef: 'rootrefcollection/QQG2McwjR2Bohi9OwQzP',
  app: firebaseapp,
  // watch: ['posts'];
  // dontwatch: ['comments'];
  persistence: 'local',
  // disableMeta: true
  dontAddIdFieldToDoc: true,
  lazyLoading: {
    enabled: true,
  },
  firestoreCostsLogger: {
    enabled: true,
  },
});

export { db, auth, dataProvider };