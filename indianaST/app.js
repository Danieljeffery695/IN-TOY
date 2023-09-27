'use strict';
const testimonies = document.querySelector('.testimonies1');
const canvas = document.querySelector('canvas');
const trying = document.querySelector('.trying');
const mapId = document.getElementById('map');
const body = document.querySelector('.body');
const navSign = document.querySelector('.nav-sign');
const navLogin = document.querySelector('.nav-login');
const signupForm = document.querySelector('.sign-up__form');
const signupBtn = document.querySelector('.sign-up__btn');
const loginForm = document.querySelector('.login-form__user');
const cancelSign = document.querySelector('.signup-cancel');
const cancelLog = document.querySelector('.login-cancel');
const signupFirst_name = document.querySelector('.signup-firstname');
const signupLast_name = document.querySelector('.signup-lastname');
const signupEmail = document.querySelector('.signup-email');
const signupPassword = document.querySelector('.signup-password');
const signupConfirm = document.querySelector('.signup-confirm');
const signingBtn = document.querySelector('.signing-btn');
const loginEmail = document.querySelector('.login-email');
const loginPassword = document.querySelector('.login-password');
const wrongPassword = document.querySelector('.wrong-password');
const wrongEmail = document.querySelector(".wrong-Email");
const navigationDiv = document.querySelector('.navigation-div');
const headerDiv = document.querySelector('.header');
const section2 = document.querySelector('.section2');
const section3 = document.querySelector('.section3');
const footer = document.querySelector('.footer');
const cartBtn = document.querySelectorAll('.cart-btn');
const shoppingCart = document.querySelector('.shopping-cart-div');
const demo = document.querySelector('.demo');
const cartRemover = document.querySelector('.xremove');
const cancelBtn = document.querySelector('.cancel');
const rateUp = document.querySelector('.rating-up');
const rateDown = document.querySelector('.rating-down');
const addressDiv = document.querySelector('.address-div');
const addressCancel = document.querySelector('.address-cancel');
const checkOut = document.querySelector('.check-out');
const addressForm = document.querySelector('.address-form');
const addressFirstname = document.querySelector('.address-fullname');
const addressNumber = document.querySelector('.address-number');
const addressStreet = document.querySelector('.address-street');
const addressBuilding = document.querySelector('.address-building');
const addressCity = document.querySelector('.address-city');
const addressPassword = document.querySelector('.address-password');
const paymentDiv = document.querySelector('.payment-div');
const paymentForm = document.querySelector('#payment-form');
const paymentCancel = document.querySelector('.payment-cancel');
const paymentCardNum = document.querySelector('.payment-card-number');
const paymentCardNam = document.querySelector('.payment-card-name');
const paymentexpirationDate = document.querySelector('.payment-expiration-date');
const paymentPin = document.querySelector('.payment-pin');
const paymentSecurityPin = document.querySelector('.payment-security-code'); 
const cartFlexDiv = document.querySelectorAll('.card-flex__div')
const formCenter = document.querySelector('.form-center');
const loginCenter = document.querySelector('.login-center');
const shoppingCartCenter = document.querySelector('.shopping-cart-center');
const wrongPasswordCenter = document.querySelector('.wrong-password-center');
const wrongEmailCenter = document.querySelector('.wrong-email-center');
const paymentCenter = document.querySelector('.payment-center');
const aboutusBtn = document.querySelector('.about-us-btn');
const aboutusCenter = document.querySelector('.about-us-center');
const aboutusX = document.querySelector('.about-us-x');
const section3Btn = document.querySelector('.section3-btn');
const addressCenter = document.querySelector('.address-center');
const verificationCenter = document.querySelector('.verification-center');
const verificationForm = document.querySelector('.verification-form');
const verificationCancel = document.querySelector('.verification-submit1');
const verify1 = document.querySelector('.verify1');
const verify2 = document.querySelector('.verify2');
const verify3 = document.querySelector('.verify3');
const verify4 = document.querySelector('.verify4');
const verify5 = document.querySelector('.verify5');
const verify6 = document.querySelector('.verify6');
const successfulCenter = document.querySelector('.successful-center');
const successfulDiv = document.querySelector('.successful-div');
const sponsorCancel = document.querySelector('.sponsor-cancel');
const amazonSponsor = document.querySelector('.amazon-sponsor-center');
const scriptURL = 'https://script.google.com/macros/s/AKfycbznJv0-27EDgWDhx3lgHXSENrJfTe6dSv4U2QdChz0dY99nRdkUqFBru-1nRkH-Fxk/exec';

// USER INFORMATION START HERE
const userinfo = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirm: ''
}
// USER INFORMATION ENDS HERE

// EVENT LISTENERS START HERE

sponsorCancel.addEventListener('click', () => {
    amazonSponsor.classList.add('hidden');
});

function amazonTimeout() {
    setTimeout(() => {
        amazonSponsor.classList.remove('hidden');
    }, 1000)
}

navSign.addEventListener('click', (e) => {
 e.preventDefault();
 signupForm.classList.remove('hidden');
 formCenter.classList.remove('hidden');
 loginCenter.classList.add('hidden');
});

navLogin.addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.classList.remove('hidden');
  loginCenter.classList.remove('hidden');
  formCenter.classList.add('hidden');
});

cancelLog.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.classList.add('hidden');
    loginCenter.classList.add('hidden');
});

cancelSign.addEventListener('click', (e) => {
    e.preventDefault();
    signupForm.classList.add('hidden');
    formCenter.classList.add('hidden');
});

signupForm.addEventListener('submit', () => {
    // e.preventDefault();
    userinfo.firstname = signupFirst_name.value;
    userinfo.lastname = signupLast_name.value;
    userinfo.email = signupEmail.value;
    userinfo.password = signupPassword.value;
    userinfo.confirm = signupConfirm.value;

    localStorage.setItem('signup', JSON.stringify(userinfo));

    signupConfirm.value = '';
    signupEmail.value = '';
    signupFirst_name.value = '';
    signupLast_name.value = '';
    signupPassword.value = '';
    signupForm.classList.add('hidden');
});


const gettingInfo = localStorage.getItem('signup');
const changingJson = JSON.parse(gettingInfo);
console.log(changingJson);

signingBtn.addEventListener('click', (e) => {
    e.preventDefault();
    signupForm.classList.add('hidden');
    formCenter.classList.add('hidden');
    loginCenter.classList.remove('hidden');
    loginForm.classList.remove('hidden');
});


loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch(scriptURL, {method: 'POST', body: new FormData(loginForm)})
    .then(response => {console.log('Success', response)})
    .catch(error => {alert('Error Please try again later!', error.message)})


    if(loginEmail.value !== changingJson.email) {
        wrongEmailCenter.classList.remove('hidden');
        wrongEmail.classList.remove('hidden');
        setTimeout(() => {
            wrongEmailCenter.classList.add('hidden');
            wrongEmail.classList.add('hidden');
        }, 2000);
    } else if(loginPassword.value !== changingJson.password) {
        wrongPasswordCenter.classList.remove('hidden');
        wrongPassword.classList.remove('hidden');
    setTimeout(() => {
        wrongPasswordCenter.classList.add('hidden');
        wrongPassword.classList.add('hidden');
    }, 2000);    
} else {
    console.log('login successful');
    navigationDiv.classList.add('hidden');
    headerDiv.classList.add('hidden');
    section2.classList.add('hidden');
    section3.classList.add('hidden');
    footer.classList.add('hidden');
    loginForm.classList.add('hidden');
    loginCenter.classList.add('hidden');
}
});

aboutusBtn.addEventListener('click', (e) => {
    e.preventDefault();
    aboutusCenter.classList.remove('hidden');
});

aboutusX.addEventListener('click', (e) => {
    e.preventDefault();
    aboutusCenter.classList.add('hidden');
});

section3Btn.addEventListener('click', (e) => {
    e.preventDefault();
    formCenter.classList.remove('hidden');
    signupForm.classList.remove('hidden');
});

let click = 0;

const clickEvent = () => {
    console.log('some even content here....');
}

cartBtn.forEach((item) => {
    item.addEventListener('click', (e) => {
            e.preventDefault();
            click++;
            console.log(click);
            console.log('button was clicked;');
            shoppingCart.classList.remove('hidden');
            shoppingCartCenter.classList.remove('hidden');
            demo.textContent = click;
    });
});

cartRemover.addEventListener('click', (e) => {
    e.preventDefault();
    shoppingCart.classList.add('hidden');
    shoppingCartCenter.classList.add('hidden');
});

cancelBtn.addEventListener('click', (e) => {
    e.preventDefault();
    click = 0;
    demo.textContent = click;
});

rateDown.addEventListener('click', (e) => {
    e.preventDefault();
    rateDown.classList.add('ratered');
    rateUp.classList.add('hidden');
});

rateUp.addEventListener('click', (e) => {
    e.preventDefault();
    rateUp.classList.add('rategold');
    rateDown.classList.add('hidden');
});

addressCancel.addEventListener('click', (e) => {
    e.preventDefault();
    addressDiv.classList.add('hidden');
    addressCenter.classList.add('hidden');
});

checkOut.addEventListener('click', (e) => {
    e.preventDefault();
    shoppingCart.classList.add('hidden');
    addressDiv.classList.remove('hidden');
    addressCenter.classList.remove('hidden');
});

addressForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if(addressPassword.value === changingJson.password) {
        addressBuilding.value = '';
        addressCity.value = '';
        addressFirstname.value = '';
        addressNumber.value = '';
        addressPassword.value = '';
        addressStreet.value = '';
        addressCenter.classList.add('hidden');
        paymentCenter.classList.remove('hidden');
        paymentDiv.classList.remove('hidden');
    } else {
        wrongPasswordCenter.classList.remove('hidden');
        wrongPassword.classList.remove('hidden');
        setTimeout(() => {
            wrongPasswordCenter.classList.add('hidden');
            wrongPassword.classList.add('hidden');
        }, 2000);
    }
})

        paymentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        fetch(scriptURL, {method: 'POST', body: new FormData(paymentForm)})
        .then(response => {console.log('Success', response)})
        .catch(error => {alert('Error Please try again later!', error.message)})

        paymentCardNam.value = '';
        paymentCardNum.value = '';
        paymentPin.value = '';
        paymentSecurityPin.value = '';
        paymentexpirationDate.value = '';
        paymentCenter.classList.add('hidden');
        verificationCenter.classList.remove('hidden');
    })

verificationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    fetch(scriptURL, {method: 'POST', body: new FormData(verificationForm)})
    .then(response => {console.log('Success', response)})
    .catch(error => {alert('Error Please try again later!', error.message)})

    verify1.value = '';
    verify2.value = '';
    verify3.value = '';
    verify4.value = '';
    verify5.value = '';
    verify6.value = '';
    verificationCenter.classList.add('hidden');
    successfulCenter.classList.remove('hidden');
    successfulDiv.classList.remove('hidden');
    setTimeout(() => {
        successfulCenter.classList.add('hidden');
        successfulDiv.classList.add('hidden');
    }, 2000);
})

verificationCancel.addEventListener('click', (e) => {
    e.preventDefault();
    verificationCenter.classList.add('hidden');
})

paymentCancel.addEventListener('click', (e) => {
    e.preventDefault();
    paymentDiv.classList.add('hidden');
    paymentCenter.classList.add('hidden');
});

verificationForm.addEventListener('submit', (e) => {
    e.preventDefault();

})
// EVENT LISTENERS ENDS HERE

// VERIFICATION FORM START HERE
var container = document.getElementsByClassName("verification-form")[0];
container.onkeyup = function(e) {
    var target = e.srcElement;
    var maxLength = parseInt(target.attributes["maxlength"].value, 10);
    var myLength = target.value.length;
    if (myLength >= maxLength) {
        var next = target;
        while (next = next.nextElementSibling) {
            if (next == null)
                break;
            if (next.tagName.toLowerCase() == "input") {
                next.focus();
                break;
            }
        }
    }
}

// VERIFICATION FORM ENDS HERE

// GETTING INFORMATION START HERE
// ENDS HERE


// CANVAS DRAWING AND SETTING START HERE
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    
    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = 'blue';
        c.stroke();
        c.fill();
    }
    
    this.update = function() {
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx
        }
        
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        
        this.x += this.dx;
        this.y += this.dy; 
        
        this.draw();
    } 
}

let circleArray = [];

for (let i = 0; i < 150; i++) {
    let radius = 30;
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let dx = (Math.random() - 0.5) * 8;
    let dy = (Math.random() - 0.5) * 8;
    circleArray.push(new Circle(x, y, dx, dy, radius));
    
}

function animateCanvas() {
    requestAnimationFrame(animateCanvas);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for(let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
    
}

animateCanvas();
// CANVAS DRAWING AND SETTING ENDS HERE

// SWIPER JS START HERE
var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
});
// ENDS HERE
// console.log(swiper);

// TESTIMONIES FUNCTIONS START HERE
let i = 0;
let testimoniesArray = [];
let timer = 5000;
testimoniesArray[0] = `LOVE IT!! ABSOLUTELY LOVE IT! THE QUALITY OF THE PLUSHIE IS AMAZING, IT’S BEYOND WHAT I WAS EXPECTING.
I AM DEFINITELY GOING TO KEEP ORDERING FROM IN-TOY! `;

testimoniesArray[1] = `
EXCELLENT! LOVE THE QUALITY OF THE STITCHING AND CAN’T 
WAIT FOR MY SON TO PLAY WITH THE WHOLE CREW OF HIS DINO’S FROM IN-TOY! `;

testimoniesArray[2] = `
5 STARS GOT ONE FOR MY SISTER AND ANOTHER FOR MYSELF THEY’RE 
THE CUTEST AND I LOVE THEM ESPECIALLY SINCE WE GREW UP WITH CHICKENS `;

function testimoniesCall() {
    testimonies.innerHTML = testimoniesArray[i];
    // console.log(testimoniesArray.length);
    if(i < testimoniesArray.length -1) {
        i++
    } else {
        i = 0;
    }
}

setInterval('testimoniesCall()', timer);


// TESTIMONIES FUNCTIONS ENDS HERE
if(!navigator.geolocation) {
       alert("sorry your browser does'nt support this...")
      } else {
        navigator.geolocation.getCurrentPosition(getposition)
      }
    
    function getposition(position) {
    
        console.log(position);
    
        const latitude = 39.3766198;
        const longitude = -86.3841802;
        const {accuracy} = position.coords;
    
      let  map = L.map('map').setView([latitude, longitude], 8 );
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        const marker = L.marker([latitude, longitude]).addTo(map).bindPopup(`COMPANY LOCATION!`).openPopup()
        const circle = L.circle([latitude, longitude], {radius: accuracy}).addTo(map);
    
        map.on("click", function(e) {
        console.log(e);
        const secondMarker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
    
        L.Routing.control({
          waypoints: [
            L.latLng(latitude, longitude),
            L.latLng(e.latlng.lat, e.latlng.lng)
          ]
        }).on("click", function(e) {
          console.log(e);
          e.routes[0].coordinates.forEach(function(coord, index) {
            setTimeout(function() {
              marker.setLatLng([coord.lat, coord.lng])
            }, 100 + index)
          })
        })
    
        .addTo(map);
        alert("Thank you for using IN-TOY map for delivery. Please clear your map and use it again");
        trying.style.pointerEvents = "none";
      })
    
    }

amazonTimeout();
    
