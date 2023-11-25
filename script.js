

let userData = {
    name: "",
    email: "",
    password : "",
    "confirm-password" : ""
}
// let userName = document.getElementById("name")
// let userEmail = document.getElementById("email")
// let userPassword = document.getElementById("password")
// let userConfirmPassword= document.getElementById("confirm-password")

let submit = document.getElementById("submit")
let errorMsg = document.getElementById("error-text")

var accessToken;


// Event Listeners
Object.keys(userData).forEach(field => {
    let currentField = document.getElementById(field);
    currentField.addEventListener("change", e => {
        userData[field] = e.target.value;
    })
    currentField.addEventListener("focus", e => {
        errorMsg.style.display = "none ";
    })
})

submit.addEventListener("click", (e)=>{
    e.preventDefault();
    if(Object.keys(userData).every( field => userData[field] !== "")){
        errorMsg.style.display = "none ";
        console.log("ok , submitted");
        
    }
    else{
        console.log("not submitted");
        errorMsg.style.display = "block ";
    }
})

// functions

function generateAccessToken() {
    return Math.floor(1000000000000000 + Math.random() * 9000000000000000).toString();
}

function storeAccessToken(userData) {
    // Generate the access token
    accessToken = generateAccessToken();

    // Store the access token in local storage
    localStorage.setItem(accessToken, userData);

    console.log('Access token stored:', accessToken);
}