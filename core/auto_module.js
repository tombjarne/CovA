document.onload = function () {
    document.getElementById('deaths-total').innerHTML = sessionStorage.getItem('deaths');
    document.getElementById('country-name').innerHTML = sessionStorage.getItem('country-name');
    document.getElementById('infected-total').innerHTML = sessionStorage.getItem('infected');
}