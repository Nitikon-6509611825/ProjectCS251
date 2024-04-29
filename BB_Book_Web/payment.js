document.querySelector('#cart-btn').onclick = () =>{
    window.location.href = 'cart.html'; // ลิงค์ไปยังหน้า cart.html
}

document.querySelector('#login-btn').onclick = () =>{
    window.location.href = 'Login.html'; // ลิงค์ไปยังหน้า login.html
}

let profilePic = document.getElementById("profile-pic");
let inputFile = document.getElementById("input-file");

inputFile.onchange = function(){
    profilePic.src = URL.createObjectURL(inputFile.files[0]);
}

let username = "Ledzeppelin";
let uid = "123456";
let fname = "Robert";
let lname = "Plant";
let gender = "Male";
let tel = "012-541-5741";
let email ="ledzeppelin@gmail.com";
let address =  "123, West Browich, US";

document.getElementById("user-name").textContent  = username;
document.getElementById("e-mail").textContent  = email;

function toggleDivVisibility() {
    var selectValue = document.getElementById("waytoPay").value;
    var hiddenDiv = document.getElementById("hidden-div");
    
    if (selectValue === "online") {
        hiddenDiv.classList.remove("row-hide");
    } else {
        hiddenDiv.classList.add("row-hide");
    }
}