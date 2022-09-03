window.onload = () => {
  
  const box = document.querySelector('.box');
  const input = document.querySelector('.input');
  
  function generateColor() {
    let string = '0123456789abcdef';
    let result = '#';
    for (let i = 0; i < 6; i++) {
      result += string[Math.floor(Math.random() * string.length)];
    }
    box.style.background = result;
    input.value = result;
  }
  
  generateColor();
  
  // generate warna baru
  const generateButton = document.querySelector('.generate');
  generateButton.addEventListener('click', generateColor);
  
  // salin kode warna kedalam clipboard ketika tombol copy ditekan
  const copyButton = document.querySelector('.copy');
  copyButton.addEventListener('click', () => {
    input.select();
    document.execCommand("copy");
    alert('warna berhasil disalin');
  });
  
}