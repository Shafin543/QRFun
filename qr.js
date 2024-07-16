function generateQR() {
  var qrText = document.getElementById("qr-text").value;

  if (!qrText) {
    alert("Please enter text or URL!");
    return;
  }

  var qrCodeDiv = document.getElementById("qr-code");
  qrCodeDiv.innerHTML = "";

  var qrCode = new QRCode(qrCodeDiv, {
    text: qrText,
    width: 200,
    height: 200
  });
}

  