const container = document.querySelector('.container');
const utama = document.querySelector('.utama');
container.addEventListener('click', function(gambar) {
    if(gambar.target.className == 'kecil') {
        utama.src = gambar.target.src;
    }
});