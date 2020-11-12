import { useState, useEffect, useContext, createContext } from 'react';
import { auth, firebase } from './firebase/firebaseClient';

const authContext = createContext(null);

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
    return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
    const [user, setUser] = useState(null);

    // Wrap any Firebase methods we want to use making sure ...
    // ... to save the user to state.
    const signIn = (email, password) => {
        return auth
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                setUser(response.user);
                return response.user;
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const signUp = (email, password) => {
        return auth
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                setUser(response.user);
                return response.user;
            });
    };

    const signOut = () => {
        return auth.signOut().then(() => {
            setUser(false);
        });
    };

    const sendPasswordResetEmail = (email) => {
        return auth.sendPasswordResetEmail(email).then(() => {
            return true;
        });
    };

    const confirmPasswordReset = (code, password) => {
        return auth.confirmPasswordReset(code, password).then(() => {
            return true;
        });
    };

    const signInWithGoogleAuth = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        return auth.signInWithPopup(provider).then((result) => {
            return {
                success: true,
                result: result
            }
        }).catch((error) => {
            console.log(error);
            return error;
        })
    };

    // Subscribe to user on mount
    // Because this sets state in the callback it will cause any ...
    // ... component that utilizes this hook to re-render with the ...
    // ... latest auth object.
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
              setUser(user);
            } else {
              setUser(false);
            }
          });
      
          // Cleanup subscription on unmount
          return () => unsubscribe();
    }, []);

    // Return the user object and auth methods
    return {
        user,
        auth,
        signIn,
        signUp,
        signOut,
        sendPasswordResetEmail,
        confirmPasswordReset,
        signInWithGoogleAuth
    };
}
