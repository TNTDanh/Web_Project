function login() {
    alert('Login Successful!');
}

function error() {
    alert('You must be logged in to view your select!');
}

function confirmDelete() {

    var isConfirmed = confirm("Are you sure you want to remove the product?");

    if (isConfirmed) {
        alert("Deleted product successfully!");
    } else {
        alert("Delete product has been cancelled.");
    }
}

function confirmDeletePicture() {

    var isConfirmed = confirm("Are you sure you want to remove product's photo?");

    if (isConfirmed) {
        alert("Deleted product's photo successfully!");
    } else {
        alert("Delete product's photo has been cancelled.");
    }
}


function lock() {

    var isConfirmed = confirm("Are you sure you want to lock this user?");

    if (isConfirmed) {
        alert("User locked!");
    } else {
        alert("Locked user has been cancelled.");
    }
}

function fix() {
    alert('Edited user information successfully!');
}

function adduser() {
    alert('New customer successfully added!');
}

function process() {
    alert('Order has been processed!');
}

function noprocess() {
    alert('Order has not been processed yet!');
}

function removed() {

    var isConfirmed = confirm("Are you sure you want to remove the order?");

    if (isConfirmed) {
        alert("Deleted order successfully!");
    } else {
        alert("Delete order has been cancelled.");
    }
}


//Update

function alertUpdate() {
    console.log("Function 1 executed!");
}

function toggleVisibilityUpdate() {
    console.log("Function 2 executed!");
}

var myButton = document.getElementById('myButtonUpdate');


myButtonUpdate.addEventListener('click', function () {

    alertUpdate();

    toggleVisibilityUpdate();
});

function alertUpdate() {
    alert('Product update successful!')
}

function toggleVisibilityUpdate() {
    var element = document.getElementById('update__none');
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}


//Add
function alertAdd() {
    console.log("Function 1 executed!");
}

function toggleVisibilityAdd() {
    console.log("Function 2 executed!");
}

var myButton = document.getElementById('myButtonAdd');

myButtonAdd.addEventListener('click', function () {

    alertUpdate();

    toggleVisibilityAdd();
});


function alertAdd() {
    alert('The product was added successfully!')
}

function toggleVisibilityAdd() {
    var element = document.getElementById('add__none');
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}


//thong ke

function generateReport1() {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = `
        <h3>Statistical Results</h3>
        <p><i>Product:</i> <b>Nike Air Force 1</b></p>
        <p><i>Since:</i> <b>${startDate}</b></p>
        <p><i>To Date:</i> <b>${endDate}</b></p>
        <p><i>Total Quantity:</i> <b>21 (piece)</b></p>
        <p><i>Total Revenue:</i> <b>186 $</b></p>
    `;
}

function generateReport2() {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = `
        <h3>Statistical Results</h3>
        <p><i>Product Classify:</i> <b>Trousers</b> </p>
        <p><i>Since:</i> <b>${startDate}</b></p>
        <p><i>To Date:</i> <b>${endDate}</b></p>
        <p><i>Total Quantity:</i> <b>54 (piece)</b></p>
        <p><i>Total Revenue:</i> <b>514.3 $</b></p>
    `;
}



function toggleVisibilityDetail() {
    var element = document.getElementById('detail__none');
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}



