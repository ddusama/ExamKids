import React, {useContext} from 'react';
import AppNav from "./src/navigation/AppNav";
import {AuthContext, AuthProvider} from "./src/context/AuthContext";


export default function App() {
    return (
        <AuthProvider>
            <AppNav/>
        </AuthProvider>
    );
}
