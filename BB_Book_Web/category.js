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

/* ------------------- */
const categories = [
    {
        name: 'นวนิยาย',
        image: './imgs/นวนิยาย.jpg',
        link: 'นวนิยาย.html'
    },
    {
        name: 'การเงิน',
        image: './imgs/การเงิน.jpg',
        link: 'การเงิน.html'
    },
    {
        name: 'การพัฒนาตนเอง',
        image: './imgs/การพัฒนาตนเอง.jpg',
        link: 'การพัฒนาตนเอง.html'
    },
    {
        name: 'นิตยสาร',
        image: './imgs/นิตยสาร.jpg',
        link: 'นิตยสาร.html'
    },
    {
        name: 'ประวัติศาสตร์',
        image: './imgs/ประวัติศาสตร์.jpg',
        link: 'ประวัติศาสตร์.html'
    },
    {
        name: 'ปรัชญา',
        image: './imgs/ปรัชญา.jpg',
        link: 'ปรัชญา.html'
    },
    {
        name: 'วิทยาศาสตร์',
        image: './imgs/วิทยาศาสตร์.jpg',
        link: 'วิทยาศาสตร์.html'
    },
    {
        name: 'อื่นๆ',
        image: './imgs/อื่นๆ.jpg',
        link: 'อื่นๆ.html'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const categoryContainer = document.querySelector('.category-container');

    categories.forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.classList.add('category');

        categoryElement.innerHTML = `
            <a href="${category.link}">
                <img src="${category.image}" alt="${category.name}">
                <h3>${category.name}</h3>
            </a>
        `;

        categoryContainer.appendChild(categoryElement);
    });
});


