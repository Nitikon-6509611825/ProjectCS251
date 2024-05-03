var jwt = localStorage.getItem("jwt");
if (jwt !== "admin" && jwt !== "user") {
    window.location.href = './login.html';
}

let searchForm = document.querySelector(".search-form");

document.querySelector("#search-bth").onclick = () => {
  searchForm.classList.toggle("active");
};

document.querySelector("#cart-btn").onclick = () => {
  window.location.href = "cart.html"; // ลิงค์ไปยังหน้า cart.html
};

document.querySelector("#login-btn").onclick = () => {
  window.location.href = "Login.html";
};

/*-------------- ตะกร้าสินค้า -----------*/

/*-------------- เรียกสินค้า -----------*/
/*---- cart.js ----*/

let total = 0;
let cart = [];
const userId = { userId: localStorage.getItem("userId") };

$(document).ready(function () {
  $.ajax({
    url: "http://localhost:3000/api/getCart",
    method: "POST",
    data: userId,
    success: function (response) {
      cart = response.bucket;
      if (cart.length === 0) {
        document.getElementById("cartItem").innerHTML =
          "Your cart is empty";
        document.getElementById("total").innerHTML =
          total.toFixed(2) + " ฿"; // แก้ไขการแสดงค่า total
      } else {
        document.getElementById("cartItem").innerHTML = cart
          .map((item, index) => {
            const { bName, price } = item;
            total += parseFloat(price);
            return `
                <div class='cart-item'>
                    <p style='font-size: 12px;'>${bName}</p>
                    <h2 style='font-size: 15px;'>${price}.00 ฿</h2>
                    <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
                </div>
            `;
          })
          .join("");
        document.getElementById("total").innerHTML =
          total.toFixed(2) + " ฿"; // แก้ไขการแสดงค่า total
      }
    },
    error: function (xhr, status, error) {
      console.error("Error:", error);
      alert("เกิดข้อผิดพลาดในการดึงข้อมูลสินค้า");
    },
  });
});

function delElement(index) {
  $.ajax({
    url: "http://localhost:3000/api/deleteCartItem",
    method: "POST",
    data: userId,
    success: function (data) {
        if (data.success == true) {
          Swal.fire({
            text: data.message,
            icon: "success",
            confirmButtonText: "OK",
          }).then((result) => {
            if (result.isConfirmed) {
                window.location.reload();
            }
          });
        }
    },
    error: function (xhr, status, error) {
        Swal.fire({
          text: xhr.responseJSON.message,
          icon: "error",
          confirmButtonText: "OK",
        });
      },
  });
}
