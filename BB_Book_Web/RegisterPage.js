function saveToDatabase() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var userId = document.getElementById('uid').value;
    var pwd = document.getElementById('password').value;

    // ส่งข้อมูลไปยังเซิร์ฟเวอร์ (โดยใช้ AJAX หรือ Fetch API)
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "RegisterPage.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); /*เปลี่ยน URL เพื่อเปลี่ยน API*/
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert("บันทึกข้อมูลเรียบร้อยแล้ว!");
        }
    };
    xhr.send("fname=" + fname + "&lname=" + lname + "&email=" + email + "&userId=" + userId + "&pwd" + pwd);
}