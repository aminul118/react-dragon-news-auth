import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import Loader from "../pages/Loader";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  if (!user) {
    <Loader />;
  }
  //   Create new user
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        loader(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("ERROR:", errorCode, errorMessage);
      });
  };

  //    Sign in / Log in a user

  const singInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setLoader(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("ERROR:", errorCode, errorMessage);
      });
  };

  // Sign out user
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed out sucessfully");
        setLoader(true);
      })
      .catch((error) => console.log("ERROR:", error));
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setUser(user);
        setLoader(false);
      } else {
        console.log("User sign out");
        setUser(null);
      }
      // Clean up the observer on component unmount
      return () => unSubscribe();
    });
  }, []);

  //   Information we pass form this provider
  const authInfo = {
    user,
    setUser,
    createNewUser,
    singInUser,
    handleSignOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
