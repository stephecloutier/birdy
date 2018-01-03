import firebase from 'firebase';


export default (state = null, action) => {
    switch (action.type) {
        case 'LOGIN':
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(this.onLoginSuccess.bind(this))
                .then(console.log('allo tu es connecté virtuellement par mon cerveau'))
                .catch(()=>{
                    firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginCreation.bind(this))
                        .catch(this.onLoginFail.bind(this));
                });
            return;
        case 'LOGOUT':
            return ;//action.payload;
        default:
            return state;
    }
};
