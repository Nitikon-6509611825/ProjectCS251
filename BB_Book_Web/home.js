let searchForm = document.querySelector('.search-form');

document.querySelector('#search-bth').onclick = () => {
    searchForm.classList.toggle('active');
};

document.querySelector('#cart-btn').onclick = () => {
    window.location.href = 'cart.html'; // ลิงค์ไปยังหน้า cart.html
};

document.querySelector('#login-btn').onclick = () => {
    window.location.href = 'Login.html'; // ลิงค์ไปยังหน้า cart.html
};


/*-------------- ตะกร้าสินค้า -----------*/
/*---- home.js ----*/

// Call API to get products when document is ready
let product = [];
$(document).ready(function () {
    // ส่งคำขอ GET ไปยัง API เพื่อดึงข้อมูลสินค้า
    $.ajax({
        url: 'http://localhost:3000/api/getProduct',
        method: 'GET',
        success: function (response) {
            // หลังจากที่ได้รับข้อมูลสินค้ามาสำเร็จ
            // กำหนดข้อมูลสินค้าให้กับตัวแปร product
            const product = response.books;

            // สร้าง HTML สำหรับแสดงสินค้า
            const productHTML = product.map((item, index) => {
                const { bPicture, bName, price } = item;
                let imageDataUrl = '';
                if (bPicture && bPicture.data.length > 0) {
                    imageDataUrl = `data:image/jpeg;base64,${bPicture.toString('base64')}`;
                    console.log(bPicture.toString('base64'))
                }
                
                return `
                    <div class='box'>
                        <div class='img-box'>
                            <img class='images' src='${imageDataUrl}'></img>
                        </div>
                        <div class='bottom'>
                            <p>${bName}</p>
                            <h2>${price}.00 ฿</h2>
                            <button onclick='addtocart(${index})'>Add to cart</button>
                        </div>
                    </div>
                `;
            }).join('');

            // แทรก HTML ที่สร้างเข้าไปใน element ที่มี id เป็น 'root'
            $('#root').html(productHTML);
        },
        error: function (xhr, status, error) {
            console.error('Error:', error);
            // แสดงข้อความแจ้งเตือนเมื่อมีข้อผิดพลาดในการดึงข้อมูล
            alert('เกิดข้อผิดพลาดในการดึงข้อมูลสินค้า');
        }
    });
});



function addtocart(a) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []; // ดึงข้อมูลตะกร้าจาก localStorage
    cart.push({ ...product[a] }); // เพิ่มสินค้าเข้าสู่ตะกร้า
    localStorage.setItem('cart', JSON.stringify(cart)); // อัปเดตข้อมูลตะกร้าใน localStorage
    window.location.href = 'cart.html'; // ส่งผู้ใช้ไปยังหน้า cart.html
}

