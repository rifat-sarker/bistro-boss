import { useState } from "react";
import { useContext } from "react";
import { getAuth } from "firebase/auth";

const AuthContext = useContext(null);
const auth = getAuth();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const authInfo = {
        user,
        loading,
    }
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;