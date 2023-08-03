import React, { useState, createContext, useEffect, useContext } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, getDocs, collection, setDoc, onSnapshot } from 'firebase/firestore';
import { clientCredentials } from '../config/firebaseConfig';

const FirebaseContext = createContext();

export const ProvideFirebase = ({ children }) => {
  const [firebaseApp, setFirebaseApp] = useState();
  const [db, setDb] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    if (!firebaseApp) {
      const app = initializeApp(clientCredentials);
      // Analytics
      // if ('measurementId' in clientCredentials) firebase.analytics();
      setFirebaseApp(app);
      setDb(getFirestore(app));
    }
  }, []);

  // useEffect(() => { if (db) login('_javi'); }, [db]); //REMOVE ME, AUTOLOGIN

  const login = async (code) => {
    const u = await loadDoc('users', code.trim().toLowerCase());
    setUser(u);
    return u;
  };

  const loadDoc = async (...path) => {
    const docRef = doc(db, 'teams', 'realpeople', ...path);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { ...docSnap.data(), id: docSnap.id };
    }

    return undefined;
  };

  const userDoc = async (...path) => {
    const response = await loadDoc('users', user.id, ...path);
    return response;
  };

  const loadCollection = async (...path) => {
    const arr = [];
    const querySnapshot = await getDocs(collection(db, 'teams', 'realpeople', ...path));

    querySnapshot.forEach((d) => {
      arr.push({ ...d.data(), id: d.id });
    });

    return arr;
  };

  const userCollection = async (...path) => {
    const response = await loadCollection('users', user.id, ...path);
    return response;
  };

  const collectionLive = (callback, ...path) => {
    const c = collection(db, 'teams', 'realpeople', ...path);
    const unsubscribe = onSnapshot(c, (querySnapshot) => {
      const arr = [];
      querySnapshot.forEach((d) => arr.push({ ...d.data(), id: d.id }));
      callback(arr);
    });

    return unsubscribe;
  };

  const userCollectionLive = (callback, ...path) => collectionLive(callback, 'users', user.id, ...path);

  const save = async (data, ...path) => {
    await setDoc(doc(db, 'teams', 'realpeople', ...path), data, { merge: true });
  };

  const userSave = async (data, ...path) => {
    await save(data, 'users', user.id, ...path);
  };

  const value = {
    firebaseApp,
    db,
    user,
    login,
    doc: loadDoc,
    userDoc,
    collection: loadCollection,
    userCollection,
    collectionLive,
    userCollectionLive,
    save,
    userSave,
  };

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => useContext(FirebaseContext);
