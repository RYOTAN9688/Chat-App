import React, { useState } from 'react';
import firebase from './config';

const AuthContext = React.createContext()


//prpvider=コンテキストで渡したい値を指定するもの
const AuthProvider = ({ children }) => {
    const [user, SetUser] = useState(null)
    //認証済みユーザーを取得しuserに格納する

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )

}

export {
    AuthProvider
}