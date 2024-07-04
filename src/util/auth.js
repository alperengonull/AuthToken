import axios from 'axios'

const API_KEY = 'AIzaSyDqxejf9KTj5KeY6oLvNsMfE4RQT0jQ82s'

export async function createUser(email,password){
    try {
        const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY, {
            email: email,
            password: password,
            returnSecureToken: true
        });
    } catch (error) {
        console.log(error.response.data); // Hata mesajını ve detaylarını gösterir
    }
}