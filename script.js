document.getElementById('qr-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const urlInput = document.getElementById('url-input');
    const qrContainer = document.getElementById('qr-container');
    
    // Clear previous QR code
    qrContainer.innerHTML = '';
    
    // Generate new QR code
    new QRCode(qrContainer, {
        text: urlInput.value,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
    });

    // Clear the input
    urlInput.value = '';
});
