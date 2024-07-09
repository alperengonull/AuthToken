import axios from 'axios'

const API_KEY = 'AIzaSyDqxejf9KTj5KeY6oLvNsMfE4RQT0jQ82s'



async function authenticate(mode,email,password)

{
    const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key= ${API_KEY}`, {
        email: email,
        password: password,
        returnSecureToken: true
    });
}




export async function createUser(email,password){
   return authenticate('signup',email,password)
}


export async function login(email,password){
    return authenticate('signInWithPassword',email,password)
 }