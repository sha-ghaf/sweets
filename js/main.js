// ===================== header ===================== 
let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    navbar.classList.remove('active');
}
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    shoppingCart.classList.remove('active');
}

function scrollHeader () {
    const header = document.querySelector('header')
    if (this.scrollY  >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// ===================== store list ===================== 
let switcherLis = document.querySelectorAll(".store ul li");
let imgs = Array.from(document.querySelectorAll('.box'));

switcherLis.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageImgs);
});
// Remove Active Class From All Lis And Add To Current
function removeActive() {
    switcherLis.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    });
}
// Manage Imgs
function manageImgs() {
    imgs.forEach((img) => {
        img.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
        el.style.display = "block";
    });
}

// ===================== store cart ===================== 

(function (){
    const cartBtn = document.querySelectorAll(".store-item-icon");
    cartBtn.forEach(function (btn){
        btn.addEventListener("click", function(event) {
            if(event.target.parentElement.classList.contains('store-item-icon')) {
                let fullPath = event.target.parentElement.previousElementSibling.src;
                let pos = fullPath.indexOf('img') + 3
                let partPath = fullPath.slice(pos)

                const item = {}
                item.img = `img-cart${partPath}`
                let name = event.target.parentElement.parentElement.nextElementSibling
                .children[0].textContent
                item.name = name
                let price = event.target.parentElement.parentElement.nextElementSibling
                .children[1].textContent
                console.log(price)
                let finalPrice = price.slice(1).trim()
                item.price = finalPrice


                const cartItem = document.createElement("div");
                    cartItem.classList.add('box')
                    cartItem.innerHTML = 
                    `<i class="fas fa-trash"></i>
                    <img src="${item.img}" alt="">
                    <div class="content">
                        <h3>${item.name}</h3>
                        <span class="price">$ <strong class="cart-item-price">${item.price}</strong> /- </span>
                        <span class="quantity">Qty : 1</span>
                    </div>
                </div>`


                const cart = document.getElementById('cart')
                const total = document.querySelector('.cart-total-container')
                cart.insertBefore(cartItem, total)
                alert('item add to the cart');
                showTotals()


                
            }
        })
    })
    // let icon = document.querySelectorAll('.box i')
    // icon.forEach((onclick) => {
    //     icon.parentElement.display = 'none'
    // })
    function showTotals(){
        const total = [];
        const items = document.querySelectorAll('.cart-item-price')
        items.forEach(function(item) {
            total.push(parseFloat(item.textContent));
        })
        const totalMoney = total.reduce(function(total, item) {
            total += item
            return total;
        },0);
        const finalMoney = totalMoney.toFixed(2)
        document.getElementById('cart-total').textContent = finalMoney;
        document.querySelector('.item-total').textContent = finalMoney;
        document.getElementById('item-count').textContent = total.length;
    }

})();

// ===================== event ===================== 
let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();
// console.log(countDownDate);

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

// ===================== review ===================== 
var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      768: {
          slidesPerView: 2,
      },
      1020: {
          slidesPerView: 3,
      },
    },
});

// ===================== theme-button ===================== 
// const theme = document.querySelector('#theme-button');
// const themeModal = document.querySelector('.customize-theme');

// // open modal
// const openThemeModal = () => {
//     themeModal.style.display = 'grid'
// } 
// //close model
// const closeThemeModal = (e) => {
//     if(e.target.classList.contains('customize-theme')){
//         themeModal.style.display = 'none'
//     }
// }
// theme.addEventListener('click', openThemeModal)
// themeModal.addEventListener('click', closeThemeModal)

