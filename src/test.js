const {auth} = require('./firebase')

console.log(auth);
// function Login() {

//     const email = 'gautamsajwan8126@gmail.com';
//     const password = 'GaUtAm@9012';

//     // const signIn = e => {
//     //     e.preventDefault();

//     //     auth.signInWithEmailAndPassword(email, password).then(auth => {
//     //         Navigate("/", { replace: true })
//     //     }).catch(error => alert(error.message));
//     // }

//     const register = () => {
//         // e.preventDefault();

//         //the snippet below will create a user with email and password and then return with an auth object 
//         auth.createUserWithEmailAndPassword(email, password).then((auth) => {
//             console.log(auth);
//             // navigate("/", { replace: true })
//         }).catch(error => alert(error.message))
//     }

//     if(email!='') {
//         register();
//     }
// }

// Login();