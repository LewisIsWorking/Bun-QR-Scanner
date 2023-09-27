let qrScanner = null;

import('http://localhost:3000/qr-scanner.min.js').then((module) => {
    qrScanner = module.default;
});

 function startScanning() {
    qrScanner.start();
}

 function stopScanning() {
    qrScanner.stop();
}

 function sayHi() {
    console.log('Hi!')
}

