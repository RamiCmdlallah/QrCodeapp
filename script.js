let imgBox = document.getElementById("imgBox")
let qrImage = document.getElementById("qrImage")
let qrText = document.getElementById("qrText")

document.body.addEventListener("keypress", (ev) => {
  if (ev.key == "Enter") generateQR()
});


function generateQR() {
  if (qrText.value.length > 0) {
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    imgBox.classList.add("show-img");
  } else if (qrText.value.length === 0) {
    alert("You Must write a text or  a URL!")
    qrText.classList.add('error');
    setTimeout(() => {
      qrText.classList.remove('error');
    }, 1000);
  }
}
