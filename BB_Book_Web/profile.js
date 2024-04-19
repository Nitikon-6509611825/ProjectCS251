document.querySelector('#cart-btn').onclick = () =>{
    window.location.href = 'cart.html'; // ลิงค์ไปยังหน้า cart.html
}

document.querySelector('#login-btn').onclick = () =>{
    window.location.href = 'Login.html'; // ลิงค์ไปยังหน้า cart.html
}

let profilePic = document.getElementById("profile-pic");
let inputFile = document.getElementById("input-file");

inputFile.onchange = function(){
    profilePic.src = URL.createObjectURL(inputFile.files[0]);
}

//เก็บUser
let userProfile = {
    username: "LedZeppelin",
    uid: "123456",
    fname: "Robert",
    lname: "Plant",
    gender: "Male",
    tel: "123-214-2510",
    email: "ledzeppelin@gmail.com",
    address: "123, West Browich, US"
};

window.onload = function(){
    document.getElementById("username").innerText = userProfile.username;
    document.getElementById("uid").innerText = userProfile.uid;
    document.getElementById("fname").innerText = userProfile.fname;
    document.getElementById("gender").innerText = userProfile.gender;
    document.getElementById("tel").innerText = userProfile.tel;
    document.getElementById("email").innerText = userProfile.email;
    document.getElementById("address").innerText = userProfile.address;

    document.getElementById("user-name").innerText = userProfile.username;
    document.getElementById("e-mail").innerText = userProfile.email;
}

   function editProfile(){
    document.getElementById("edit-user-input").value = userProfile.username;
}