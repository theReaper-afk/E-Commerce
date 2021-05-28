//From Sir Joy 

import firebase from "firebase";
import "firebase/firestore";
import { firebaseConfig } from '../Firebase/Config';
// import "firebase/auth";

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

export const saveAUser = async (user) => {


    const returnData = {
        code: 404,
        message: 'Saving not successful',
        result: null

    }
    // const result = db.collection('users').add(user);
    const result = db.collection('users').doc(user.uid).set({user}, {merge: true});

    if (result) {
        returnData.code = 200;
        returnData.message = "Saving is successful"
        returnData.result = result;
    }

    return returnData;
}

export const retrieveAUser = async (user) => {
    const retrievedUser = {
        uid: null,
        email: null,
        
    }

    await db.collection('users')
        .doc(user.id)
        .get()
        .then(documentSnapshot => {
            if (documentSnapshot.exists) {
                retrievedUser.uid = documentSnapshot.id,
                    retrievedUser.email = documentSnapshot.data().family_name
            }
            
        })

    return retrievedUser;
}

//modified retrieve user