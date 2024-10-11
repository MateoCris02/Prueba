 
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_AUTH_DOMAIN",
    projectId: "TU_PROJECT_ID",
    appId: "TU_APP_ID"
};

 
firebase.initializeApp(firebaseConfig);

 
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Inicio de sesión exitoso
            const user = userCredential.user;
            console.log("Usuario conectado:", user);
            errorMessage.textContent = "Inicio de sesión exitoso!";
            errorMessage.className = "text-success mt-3 text-center";
            // Redirección después de un inicio de sesión exitoso
            setTimeout(() => {
                window.location.href = 'https://tu-sistema.com/dashboard'; 
            }, 1500);
        })
        .catch((error) => {
            // Error en el inicio de sesión
            const errorCode = error.code;
            const errorMsg = error.message;
            console.error("Error de inicio de sesión:", errorCode, errorMsg);
            errorMessage.textContent = "Error en el inicio de sesión. Por favor, verifica tus credenciales.";
            errorMessage.className = "text-danger mt-3 text-center";
        });
});