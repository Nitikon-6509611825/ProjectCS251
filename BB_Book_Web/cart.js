let searchForm = document.querySelector('.search-form');

document.querySelector('#search-bth').onclick = () =>{
    searchForm.classList.toggle('active');
}

document.querySelector('#cart-btn').onclick = () =>{
    window.location.href = 'cart.html'; // ลิงค์ไปยังหน้า cart.html
}

document.querySelector('#login-btn').onclick = () =>{
    window.location.href = 'Login.html'; 
}

/*-------------- ตะกร้าสินค้า -----------*/



/*-------------- เรียกสินค้า -----------*/
/*---- cart.js ----*/

window.onload = function() {
    displaycart();
}

function displaycart(){
    let total = 0;
    let cart = JSON.parse(localStorage.getItem('cart')) || []; // ดึงข้อมูลตะกร้าจาก localStorage

    if(cart.length === 0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = total.toFixed(2)+ " ฿"; // แก้ไขการแสดงค่า total
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((item, index) => {
            const { title, price } = item;
            total += price;
            return `
                <div class='cart-item'>
                    <p style='font-size: 12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>${price}.00 ฿</h2>
                    <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
                </div>
            `;
        }).join('');
        document.getElementById("total").innerHTML = total.toFixed(2)+ " ฿"; // แก้ไขการแสดงค่า total
    }
}

function delElement(index){
    let cart = JSON.parse(localStorage.getItem('cart')) || []; // ดึงข้อมูลตะกร้าจาก localStorage
    cart.splice(index, 1); // ลบสินค้าออกจากตะกร้า
    localStorage.setItem('cart', JSON.stringify(cart)); // อัปเดตข้อมูลตะกร้าใน localStorage
    displaycart(); // แสดงรายการสินค้าใหม่หลังจากลบ
}





