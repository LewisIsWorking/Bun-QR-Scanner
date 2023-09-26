// import QrScanner from 'qr-scanner';

import * as scanner from './scanner.ts';

console.log("Bun Running.");

const server = Bun.serve({
    async fetch(req){
        const url = new URL(req.url);

        switch (url.pathname) {
            case '/scanner.ts':
                return new Response(Bun.file(import.meta.dir + "/src/scanner.ts"), {
                    headers: {
                        'Content-Type': 'text/javascript; charset=utf-8'
                    }
                });
            case '/demo.html':
            case '/':
                return new Response(Bun.file(import.meta.dir + '/demo.html'), {
                    headers: {
                        'Content-Type': 'text/html; charset=utf-8'
                    }
                });
            default:
                return new Response('404!');

        }
    }
})

console.log(`Listening on http://localhost:${server.port} ...`);
