const shareBack = document.getElementsByClassName('share-background');
const shareOptions = document.getElementById('share-options');

shareBack[0].addEventListener('click', function () {
    this.classList.toggle('active')
    shareOptions.classList.toggle('active');
})