(function() {

    // Initialize Firebase
    const config = {
        apiKey: "AIzaSyD8EhTEPtVE3VmAfBgyNuu2dpqVtgKnHHs",
        authDomain: "playground-log-in.firebaseapp.com",
        databaseURL: "https://playground-log-in.firebaseio.com",
        projectId: "playground-log-in",
        storageBucket: "playground-log-in.appspot.com",
        messagingSenderId: "519427927617"
    };
    firebase.initializeApp(config);


    // Get elements
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignup = document.getElementById('btnSignup');
    const btnLogout = document.getElementById('btnLogout');


    // Add login event
    btnLogin.addEventListener('click', e => {
        // Get email and password
        const email = txtEmail.value;
        const password = txtPassword.value;
        const auth = firebase.auth();

        // Sign in 
        const promise = auth.signInWithEmailAndPassword(email, password);
        promise.catch(e => console.log(e.message));
    });


    // Add signup event
    btnSignup.addEventListener('click', e => {
        // Get email and password
        // TO DO: check for real email
        const email = txtEmail.value;
        const password = txtPassword.value;
        const auth = firebase.auth();

        // Create new user
        const promise = auth.createUserWithEmailAndPassword(email, password);
        promise.catch(e => console.log(e.message));
    });


    // Logout
    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
    });


    // Add realtime authentication listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            console.log(firebaseUser);
            btnLogout.classList.remove('hide');
        } else {
            console.log('not logged in');
            btnLogout.classList.add('hide');
        }
    });



}())