let searchForm = document.querySelector(".search-form");

document.querySelector("#search-bth").onclick = () => {
  searchForm.classList.toggle("active");
};

document.querySelector("#cart-btn").onclick = () => {
  window.location.href = "cart.html"; // ลิงค์ไปยังหน้า cart.html
};

document.querySelector("#login-btn").onclick = () => {
  window.location.href = "Login.html"; // ลิงค์ไปยังหน้า cart.html
};

/*-------------- ตะกร้าสินค้า -----------*/
/*---- home.js ----*/

if (!("TextDecoder" in window))
  alert(
    "Sorry, this browser does not support TextDecoder..."
  );

// Call API to get products when document is ready
let product = [];
$(document).ready(function () {
  $.ajax({
    url: "http://localhost:3000/api/getProduct",
    method: "GET",
    success: function (response) {
      product = response.books;
      const productHTML = product
        .map((item, index) => {
          const { bPicture, bName, price } = item;
          let imageDataUrl = "";
          if (bPicture && bPicture.data.length > 0) {
            var enc = new TextDecoder("utf-8");
            var arr = new Uint8Array(bPicture.data);
            imageDataUrl = String(enc.decode(arr));
          }
          return `
                    <div class='box'>
                        <div class='img-box'>
                            <img style="height: 100%;"
                            src="/backend/${imageDataUrl}"
                            alt="">
                        </div>
                        <div class='bottom'>
                            <p>${bName}</p>
                            <h2>${price}.00 ฿</h2>
                            <button onclick='addtocart(${index})'>Add to cart</button>
                        </div>
                    </div>
                `;
        })
        .join("");

      $("#root").html(productHTML);
    },
    error: function (xhr, status, error) {
      console.error("Error:", error);
      alert("เกิดข้อผิดพลาดในการดึงข้อมูลสินค้า");
    },
  });
});

function addtocart(index) {
  var formData = {
    userId: localStorage.getItem("userId"),
    bName: product[index].bName,
    price: product[index].price,
  };

  $.ajax({
    url: "http://localhost:3000/api/addToCart",
    method: "POST",
    data: formData,
    success: function (data) {
      if (data.success == true) {
        Swal.fire({
          text: data.message,
          icon: "success",
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "./Confirm.html";
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
