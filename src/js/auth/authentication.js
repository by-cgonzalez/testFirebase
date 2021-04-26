import firebase from "firebase/app";
import "firebase/auth";

export const AuthEmailPass = (email, pass) => {

}

export const AddAccountEmailPass = ({ email, pass, names }) => {
    console.log(email)
    firebase.auth().createUserWithEmailAndPassword(email, pass)
        .then(result => {
            console.log(result)
            result.user.updateProfile({
                displayName: names,
            })

            const configuration = {
                url: 'http://localhost:8080/',
            }

            result.user.sendEmailVerification(configuration)
                .catch(err => console.error(err))

            firebase.auth().signOut()

            console.log('Welcome, please verify your mail!')
        })
        .catch(error => {
            console.error(error)
            //Materialize.toast(error.message, 4000)
        })

}
