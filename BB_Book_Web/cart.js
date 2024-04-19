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

const product = [
    {
        id: 0,
        image: 'imgs/แมวส้ม.jpg',
        title: 'แมวส้ม',
        price: 120,
    },
    {
        id: 1,
        image: 'imgs/พิธา.jpg',
        title: 'พิธา',
        price: 100,
    },
    {
        id: 2,
        image: 'imgs/จิต.jpg',
        title: 'จิตวิทยา',
        price: 140,
    },
    {
        id: 3,
        image: 'imgs/ใจดี.jpg',
        title: 'ใช้คลื่นพลังบวก',
        price: 240,
    },
    
];

const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
    document.getElementById('root').innerHTML = product.map((item) => {
        var { image, title, price } = item;
        return(
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src='${image}'></img>
                </div>
                <div class='bottom'>
                    <p>${title}</p>
                    <h2>${price}.00 ฿</h2>`+
                    "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
                    `</div>
            </div>`
        )
    }).join('');
    

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
    let j=0, total=0;

   

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

