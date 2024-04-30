let searchForm = document.querySelector('.search-form');

document.querySelector('#search-bth').onclick = () =>{
    searchForm.classList.toggle('active');
}

document.querySelector('#cart-btn').onclick = () =>{
    window.location.href = 'cart.html'; // ลิงค์ไปยังหน้า cart.html
}

document.querySelector('#login-btn').onclick = () =>{
    window.location.href = 'Login.html'; // ลิงค์ไปยังหน้า cart.html
}


/*-------------- ตะกร้าสินค้า -----------*/
/*---- home.js ----*/

const product = [
    {
        id: 0,
        image: 'imgs/จิต.jpg',
        title: 'จิตวิทยา',
        price: 140,
    },
    
];

function addtocart(a){
    let cart = JSON.parse(localStorage.getItem('cart')) || []; // ดึงข้อมูลตะกร้าจาก localStorage
    cart.push({...product[a]}); // เพิ่มสินค้าเข้าสู่ตะกร้า
    localStorage.setItem('cart', JSON.stringify(cart)); // อัปเดตข้อมูลตะกร้าใน localStorage
    window.location.href = 'cart.html'; // ส่งผู้ใช้ไปยังหน้า cart.html
}

document.getElementById('root').innerHTML = product.map((item, index) => {
    const { image, title, price } = item;
    return `
        <div class='box'>
            <div class='img-box'>
                <img class='images' src='${image}'></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>${price}.00 ฿</h2>
                <button onclick='addtocart(${index})'>Add to cart</button>
            </div>
        </div>
    `;
}).join('');
