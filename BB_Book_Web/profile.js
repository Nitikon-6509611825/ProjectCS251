var jwt = localStorage.getItem("jwt");
if (jwt !== "admin" && jwt !== "user") {
  window.location.href = "./login.html";
}

document.querySelector("#cart-btn").onclick = () => {
  window.location.href = "cart.html"; // ลิงค์ไปยังหน้า cart.html
};

document.querySelector("#login-btn").onclick = () => {
  window.location.href = "Login.html"; // ลิงค์ไปยังหน้า login.html
};

let profilePic = document.getElementById("profile-pic");
let inputFile = document.getElementById("input-file");

// inputFile.onchange = function(){
//     profilePic.src = URL.createObjectURL(inputFile.files[0]);
// }

let profile;
const userId = localStorage.getItem("userId");
const userKey = localStorage.getItem("userKey");

$(document).ready(function () {
  $.ajax({
    url: "http://localhost:3000/api/getProfile",
    method: "POST",
    data: { userKey: userKey },
    success: function (response) {
      profile = response.profile;
      const profileHTML = profile.map((item, index) => {
        const {
          Tel,
          UserID,
          email,
          fname,
          gender,
          lname,
          userName,
          address,
        } = item;
        document.getElementById("username").innerText =
          userName;
        document.getElementById("uid").innerText = UserID;
        document.getElementById("fname").innerText = fname;
        document.getElementById("lname").innerText = lname;
        document.getElementById("gender").innerText =
          gender;
        document.getElementById("tel").innerText = Tel;
        document.getElementById("email").innerText = email;

        document.getElementById("address").innerText =
          address;

        document.getElementById("user-name").innerText =
          document.getElementById("username").innerText;
        document.getElementById("e-mail").innerText =
          document.getElementById("email").innerText;
      });
    },
    error: function (xhr, status, error) {
      console.error("Error:", error);
      alert("เกิดข้อผิดพลาดในการดึงข้อมูลโปรไฟล์");
    },
  });
});
