let searchForm = document.querySelector('.search-form');

document.querySelector('#search-bth').onclick = () =>{
    searchForm.classList.toggle('active');
}

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




window.onload = function() {
    displayPaymentDetails();
    setupPaymentButtons();
}

function setupPaymentButtons() {
    const confirmPaymentButton = document.getElementById('confirmPaymentButton');
    const cancelPaymentButton = document.getElementById('cancelPaymentButton');

    confirmPaymentButton.addEventListener('click', confirmPayment);
    cancelPaymentButton.addEventListener('click', cancelPayment);
}

function confirmPayment() {
    // ใส่โค้ดที่ต้องการให้ทำงานเมื่อผู้ใช้คลิกปุ่มยืนยันการชำระเงินที่นี่
    // เช่น ส่งข้อมูลการชำระเงินไปยังเซิร์ฟเวอร์ หรือแสดงข้อความยืนยันการชำระเงิน
    alert('Payment confirmed!');
    // หลังจากยืนยันการชำระเงินแล้วอาจทำการ redirect หรือประมวลผลเพิ่มเติมตามที่ต้องการ
}

function cancelPayment() {
    // ใส่โค้ดที่ต้องการให้ทำงานเมื่อผู้ใช้คลิกปุ่มยกเลิกการชำระเงินที่นี่
    // เช่น กลับไปยังหน้าก่อนหน้าหรือปิดหน้าต่าง
    alert('Payment cancelled!');
    // หรือสามารถทำการ redirect หรือประมวลผลเพิ่มเติมตามที่ต้องการ
}
