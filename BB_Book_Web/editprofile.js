
function updateProfile() {
    // ดึงข้อมูลจากฟิลด์แก้ไข
    var newUsername = document.getElementById("username-input").value;
    var newFirstName = document.getElementById("fname-input").value;
    var newLastName = document.getElementById("lname-input").value;
    var newGender = document.getElementById("gender-input").value;
    var newTel = document.getElementById("tel-input").value;
    var newEmail = document.getElementById("email-input").value;
    var newAddress = document.getElementById("address-input").value;

    // สร้างอ็อบเจ็กต์เพื่อเก็บข้อมูลใหม่
    var updatedProfile = {
        username: newUsername,
        firstName: newFirstName,
        lastName: newLastName,
        gender: newGender,
        tel: newTel,
        email: newEmail,
        address: newAddress
    };

    // บันทึกข้อมูลใหม่ใน localStorage
    localStorage.setItem('updatedProfile', JSON.stringify(updatedProfile));

    // กลับไปยังหน้าโปรไฟล์เดิม
    window.location.href = 'profile.html';
}
