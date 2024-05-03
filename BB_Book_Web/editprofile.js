var jwt = localStorage.getItem("jwt");
if (jwt !== "admin" && jwt !== "user") {
    window.location.href = './login.html';
}

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

        document.getElementById("username-input").value =
          userName;
        document.getElementById("fname-input").value =
          fname;
        document.getElementById("lname-input").value =
          lname;
        var selectElement =
          document.getElementById("gender-input");
        for (
          var i = 0;
          i < selectElement.options.length;
          i++
        ) {
          //add lowercase both side
          if (
            selectElement.options[i].value.toLowerCase() ==
            gender.toLowerCase()
          ) {
            selectElement.options[i].selected = true;
            break;
          }
        }

        document.getElementById("tel-input").value = Tel;
        document.getElementById("email-input").value =
          email;
        document.getElementById("address-input").value =
          address;

        document.getElementById("user-name").innerText =
          document.getElementById("username-input").value;
        document.getElementById("e-mail").innerText =
          document.getElementById("email-input").value;
      });
    },
    error: function (xhr, status, error) {
      console.error("Error:", error);
      alert("เกิดข้อผิดพลาดในการดึงข้อมูลโปรไฟล์");
    },
  });
});

function updateProfile() {
  // ดึงข้อมูลจากฟิลด์แก้ไข
  var newUsername = document.getElementById(
    "username-input"
  ).value;
  var newFirstName =
    document.getElementById("fname-input").value;
  var newLastName =
    document.getElementById("lname-input").value;
  var newGender =
    document.getElementById("gender-input").value;
  var newTel = document.getElementById("tel-input").value;
  var newEmail =
    document.getElementById("email-input").value;
  var newAddress =
    document.getElementById("address-input").value;

  // สร้างอ็อบเจ็กต์เพื่อเก็บข้อมูลใหม่
  var updatedProfile = {
    username: newUsername,
    firstName: newFirstName,
    lastName: newLastName,
    gender: newGender,
    tel: newTel,
    email: newEmail,
    address: newAddress,
    userKey: userKey,
  };

  $(document).ready(function () {
    $.ajax({
      url: "http://localhost:3000/api/updateProfile",
      method: "PUT",
      data: updatedProfile,
      success: function (response) {
        Swal.fire({
          text: response.message,
          icon: "success",
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "./profile.html";
          }
        });
      },
      error: function (xhr, status, error) {
        Swal.fire({
          text: xhr.responseJSON.message,
          icon: "error",
          confirmButtonText: "OK",
        });
      },
    });
  });
}
