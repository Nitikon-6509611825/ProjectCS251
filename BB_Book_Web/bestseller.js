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

let scrollContainer = document.querySelector(".best-seller");
let backBtn = document.queryElementById("backBtn");
let nextBtn = document.queryElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaV;
});

