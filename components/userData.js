const firebase = require("firebase");
require("firebase/firestore");
let userData=[]; 
/*
const users =  firebase.firestore().collection('users').get()   
.then(users?.forEach(doc => {
    console.log(doc?.id, '=>', doc?.data()); 
    userData.push(doc.data());     
}));
*/

    async function getAll(){
        
        console.log("hello1");
        try {
            //let users = await firebase.firestore().collection('users').get()
            const users =  await firebase.firestore().collection('users').get();
            userData= await[]; 
            console.log("hello2");
            users?.forEach(doc => {
                //console.log(doc?.id, '=>', doc?.data()); 
                userData.push(doc.data());
                //console.log('what is happening');
            });
            
        } catch (err){
        Alert.alert('There is an error.', err.message)
        }
    }
    console.log("hello3");
   
export {getAll,userData}