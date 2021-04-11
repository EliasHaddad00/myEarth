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
        
        try {
            //let users = await firebase.firestore().collection('users').get()
            const users =  await firebase.firestore().collection('users').get();
            userData= await[]; 
            users?.forEach(doc => {
                //console.log(doc?.id, '=>', doc?.data()); 
                userData.push(doc.data());
                //console.log('what is happening');
            });
            
        } catch (err){
        Alert.alert('There is an error.', err.message)
        }
    }
   
export {getAll,userData}