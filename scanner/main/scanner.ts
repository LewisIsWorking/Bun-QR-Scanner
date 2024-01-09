let QrScanner = null;
let scanner = null;

import('http://localhost:3000/qr-scanner.min.js').then((module) => {
    QrScanner = module.default;
    const videoElem = document.getElementById('qr-video');
    scanner = new QrScanner(videoElem,
        result => console.log('decoded qr code:', result), { returnDetailedScanResult: true });
})

 function startScanning() {
    scanner.start();
}

 function stopScanning() {
     scanner.stop();
}

 function sayHi() {
    console.log('Hi!')
}

