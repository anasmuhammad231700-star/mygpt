function copyIP(){
    navigator.clipboard.writeText("play.lunarboys.it");
    alert("IP copiato!");
}

function login(){
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if(user === "admin" && pass === "1234"){
        window.location = "dashboard.html";
    } else {
        alert("Login sbagliato!");
    }
}
