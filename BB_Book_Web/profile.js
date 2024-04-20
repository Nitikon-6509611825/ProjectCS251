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

    let username = document.getElementById("username").innerText = "Ledzeppelin";
    let uid = document.getElementById("uid").innerText = "123456";
    let fname = document.getElementById("fname").innerText = "Robert";
    let lname = document.getElementById("lname").innerText = "Plant";
    let gender = document.getElementById("gender").innerText = "Male";
    let tel = document.getElementById("tel").innerText = "012-541-5741";
    let email = document.getElementById("email").innerText ="ledzeppelin@gmail.com";
    let address = document.getElementById("address").innerText =  "123, West Browich, US";

    document.getElementById("user-name").innerText = document.getElementById("username").innerText
    document.getElementById("e-mail").innerText = document.getElementById("email").innerText;

    window.onload = function() {
        // ตรวจสอบว่ามีข้อมูลอัพเดตใน localStorage หรือไม่
        if (localStorage.getItem('profileData')) {
            // ถ้ามีข้อมูล ให้ดึงข้อมูลมาใช้
            const updatedProfile = JSON.parse(localStorage.getItem('updatedProfile'));
    
            // แสดงข้อมูลใหม่ใน HTML
            document.getElementById('username').innerText = updatedProfile.username;
            document.getElementById('fname').innerText = updatedProfile.firstName;
            document.getElementById('lname').innerText = updatedProfile.lastName;
            document.getElementById('gender').innerText = updatedProfile.gender;
            document.getElementById('tel').innerText = updatedProfile.tel;
            document.getElementById('email').innerText = updatedProfile.email;
            document.getElementById('address').innerText = updatedProfile.address;
    
            // ลบข้อมูลที่อัพเดตออกจาก localStorage
            localStorage.removeItem('updatedProfile');
        }
    };

   

    
    
   
    
      

    
    
        
        

    
   
