let menuIcon = document.getElementById('menuIcon');
let sideNav = document.getElementById('sideNav');
let menuClose = document.getElementById('menuClose');

menuIcon.addEventListener('click', function () {
    sideNav.style.right = '0';
});
menuClose.addEventListener('click', function () {
    sideNav.style.right = '-50%';
});

/*Search functionality*/

let search = document.getElementById('search');
let container = document.getElementById('container');
let productList = container.querySelectorAll('div');

search.addEventListener('keyup', function (event) {
    let enteredValue = event.target.value.toUpperCase();

    for (count = 0; count < productList.length; count = count + 1) {

        let productName = productList[count].querySelector('h2').textContent;

        if (productName.toUpperCase().indexOf(enteredValue) < 0) {
            productList[count].style.display = 'none';
        }
        else {
            productList[count].style.display = 'block';
        }
    }
});

