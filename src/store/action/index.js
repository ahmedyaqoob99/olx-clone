import firebase from '../../config/firebase';

const facebook_login = () => 
{
    return(dispatch) => {
        
    var provider = new firebase.auth.FacebookAuthProvider();
    
    firebase.auth().signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;

        let create_user = {
            name: user.displayName,
            email: user.email,
            profile: user.photoURL,
            uid: user.uid
        }
        firebase.database().ref("/").child(`users/${user.uid}`).set(create_user)
        .then(()=>{
            dispatch({ type: "SETUSER", payload: create_user })
            alert(`Welcome! ${user.displayName}`);
        })
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("Error==>",errorMessage);
      });
    }
}


export {
    facebook_login
}
    