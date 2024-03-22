import { Dispatch, SetStateAction } from "react";
import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, sigInWithGoogle } from "../../firebase/providers";
import { UserContextInterface, UserState } from "../../contexts/interfaces/interfaces";
import { LoginFormInput, RegisterFormInput } from "../pages/interfaces/interface";


export const login=(setUser:Dispatch<SetStateAction<UserState>>,result:any)=>{    
    const {displayName,photoURL,email,uid}=result;
    //TODO: Poner los tipos de datos bien en donde estan los any de la inferencia de datos de result    
    const changeUser:UserState={
        status:'authenticated',
        photoURL: photoURL,
        displayName: displayName,
        email: email,
        uid: uid,
        errorCode:'',
        errorMessage:'',
    }    
    setUser(changeUser);
}

export const logout=(setUser:Dispatch<SetStateAction<UserState>>)=>{
    const changeUser:UserState={
        uid:'',
        displayName:'',
        email:'',
        photoURL:'',
        status:'not-authenticated',
        errorCode:null,
        errorMessage:null,
      }    
      setUser(changeUser);

      logoutFirebase();
}

export const checkingAuth=(user:UserState,setUser:Dispatch<SetStateAction<UserState>>)=>{
    const changeUser:UserState={
        ...user,
        status:'checking',
        errorCode:null,
        errorMessage:null,
      }    
      setUser(changeUser);
}

export const ErrorAuth=(user:UserState,setUser:Dispatch<SetStateAction<UserState>>,result:any)=>{
    const changeUser={
        ...user,
        status:'not-authenticated',
        errorCode:result.errorCode,
        errorMessage:result.errorMessage,
      }    
      setUser(changeUser);
}


export const StartGoogleSignIn=async(user:UserState,setUser:Dispatch<SetStateAction<UserState>>)=>{
    checkingAuth(user,setUser);
        try {

            console.log(user);
            
            const result= await sigInWithGoogle();

            console.log('result'+JSON.stringify(result));
            
            if (result.ok){
                login(setUser,result);
            }
            else{
                console.log('error'+result);
                logout(setUser);
                ErrorAuth(user,setUser,result);
            }
        }
        catch(error){
            console.log(error);
            return(error)
        }
}

export const StartCreatingUserWithEmailAndPassword=async(user:UserState,setUser:Dispatch<SetStateAction<UserState>>,data:RegisterFormInput)=>{
    checkingAuth(user,setUser);
    try{
        const result = await registerUserWithEmailPassword(data);

        console.log(JSON.stringify(result));

        
        if(!result.ok) ErrorAuth(user,setUser,result);
        else login(setUser,result);

    }
    catch(error){
        console.log(error);   
    }
}

export const StartLoginWithEmailAndPassword=async(user:UserState,setUser:Dispatch<SetStateAction<UserState>>,data:LoginFormInput)=>{
    console.log(JSON.stringify(data));
    checkingAuth(user,setUser);
    try{
        const result= await loginWithEmailPassword(data);
        console.log(JSON.stringify(result));

        if(!result.ok) ErrorAuth(user,setUser,result);
        else login(setUser,result);

    }
    catch(error){
        console.log(error);
    }
}