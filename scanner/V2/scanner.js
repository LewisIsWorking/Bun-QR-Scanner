let QrScanner = null;
let scanner = null;

import('http://localhost:3000/qr-scanner.min.js').then((module) => {
    QrScanner = module.default;
    const videoElem = document.getElementById('qr-video');
    scanner = new QrScanner(videoElem,
        result => console.log('decoded qr code:', result), { returnDetailedScanResult: true });
})

function hello() {
    console.log('hello')
}

function test1() {
    console.log('test1', scanner)
    scanner.start();
}