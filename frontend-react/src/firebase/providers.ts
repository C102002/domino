import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";
import { RegisterFormInput } from "../auth/pages/interfaces/interface";

const googleProvider= new GoogleAuthProvider();

export const sigInWithGoogle=async()=>{
    try{

        const result= await signInWithPopup(FirebaseAuth,googleProvider)
        const user=result.user;
        const errorCode='';
        const errorMessage='';

        const {displayName,email,photoURL,uid}=user

        return{
            ok:true,
            //User info
            displayName,email,photoURL,uid,errorCode,errorMessage
        }
    }
    catch(error:any){
        const errorCode=error.code;
        const errorMessage=error.message;

        return{
            ok:false,
            //Error info
            errorCode,errorMessage
        }
    }
}

export const registerUserWithEmailPassword=async (data:RegisterFormInput)=>{
    const {email,password,displayName}=data;
    try{
    //console.log('final:'+email,password,displayName);

        const resp= await createUserWithEmailAndPassword(FirebaseAuth,email,password)
        const{uid,photoURL}=resp.user;

        if(FirebaseAuth.currentUser){
            await updateProfile(FirebaseAuth.currentUser,{displayName});
        
            return {ok:true, uid,photoURL,email,displayName}
        }
        return {ok:false,resp}
    }
    catch(error:any){
        ///=TODO Hacer un diccionario de los tipos de errores y los mensajes        
        const errorCode=error.code;
        const errorMessage=error.message;

        return{
            ok:false,
            //Error info
            errorCode,errorMessage
        }
    }
}

export const logoutFirebase= async()=>{
    return await FirebaseAuth.signOut();
}