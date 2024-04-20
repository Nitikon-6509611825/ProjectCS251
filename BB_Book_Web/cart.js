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

var cart=[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let total=0;
    cart = JSON.parse(localStorage.getItem('cart')) || []; // ดึงข้อมูลจาก localStorage
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((item)=>
    {
        var {title, price} = item;
        total=total+price;
        document.getElementById("total").innerHTML = "$ "+total+".00"
        return(
            `<div class='cart-item'>
            <p style= 'font-size:12px;'>${title}</p>
            <h2 style='font-size: 15px;'>$ ${price}.00 ฿</h2>`+
            "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
        );
    }).join('');
    }
}

window.onload = function() {
    displaycart();
}

document.getElementById('submitBtn').addEventListener('click', function() {
    // รับข้อมูลจากฟอร์ม
    const formData = new FormData(document.getElementById('checkoutForm'));

    // ส่งข้อมูลไปยังเซิร์ฟเวอร์โดยใช้ Fetch API
    fetch('submit.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            // ทำอย่างไรก็ตามที่ต้องการหลังจากส่งข้อมูลสำเร็จ
            console.log('Data submitted successfully!');
        } else {
            // กรณีเกิดข้อผิดพลาดในการส่งข้อมูล
            console.error('Error submitting data:', response.statusText);
        }
    })
    .catch(error => {
        console.error('Error submitting data:', error);
    });
});
