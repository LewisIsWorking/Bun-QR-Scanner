import QrScanner from 'qr-scanner';
// import QrScanner from '/qr-scanner/qr-scanner.min.js';
// do something with QrScanner.

// To enforce the use of the new api with detailed scan results, call the constructor with an option object, see below.
let videoElem: HTMLVideoElement = '';
const qrScanner = new QrScanner(
    videoElem,
    result => console.log('decoded qr code:', result),
    { /* your options or returnDetailedScanResult: true if you're not specifying any other options */ },
);

function startScanning() {
    qrScanner.start();
}

function stopScanning() {
    qrScanner.stop();
}

export function sayHi() {
    console.log('Hi!')
}

