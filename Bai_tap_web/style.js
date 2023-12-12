//chay slide
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); 
}
showSlides();


//thong bao dang nhap thanh cong
function login() {
    alert('Login Successful!');
}

//thong bao dang ki thanh cong
function regist() {
    alert('Account successfully created!');
}

//thong bao loi khi vao gio hang luc chua dang nhap
function error() {
    alert('You must be logged in to view your shopping cart!');
}

//thong bao tim kiem mat hang thanh cong
function search() {
    alert('Search Success!');
}

//thong bao tim kiem mat hang thanh cong
function contact() {
    alert('Please return to Home to view our contact information!');
}

//Chuyen huong toi trang san pham chi tiet cua ao
function pagechangeshirt() {
    window.location.href = "http://127.0.0.1:5500/Bai_tap_web/shirtdetail.html";
}

function pagechangeshirtuser() {
    window.location.href = "http://127.0.0.1:5500/Bai_tap_web/shirtdetailuser.html";
}

//Chuyen huong toi trang san pham chi tiet cua quan
function pagechangetrousers() {
    window.location.href = "http://127.0.0.1:5500/Bai_tap_web/trousersdetail.html";
}

function pagechangetrousersuser() {
    window.location.href = "http://127.0.0.1:5500/Bai_tap_web/trousersdetailuser.html";
}

//Chuyen huong toi trang san pham chi tiet cua giay
function pagechangeshoe() {
    window.location.href = "http://127.0.0.1:5500/Bai_tap_web/shoedetail.html";
}

function pagechangeshoeuser() {
    window.location.href = "http://127.0.0.1:5500/Bai_tap_web/shoedetailuser.html";
}

function buy() {
    alert('Please log in to buy!');
}

function buyuser() {
    alert('Added product to cart successfully! Please view your shopping cart to complete your order!');
}

function removed() {
    alert('Successfully removed!');
}

function order(){
    alert('Before purchasing, check your information again!')
}

function submit(){
    alert('Your order has been completed!')
}

