// import QrScanner from 'qr-scanner';

import * as scanner from './scanner.ts';

console.log("Bun Running.");

const server = Bun.serve({
    port: 3000,
    fetch: async (req) => {
        console.log('serving scanner.js');
        if (req.url.endsWith('scanner.js')) {
            return new Response(Bun.file('./main/scanner.js'));
        }
        else if (req.url.endsWith('qp-scanner.umd.min.js')){
            return new Response(bun.file('./pages/qp-scanner.umd.js.min'))
        }
        return new Response(Bun.file('./pages/scanner.html'));
    }
})

console.log(`Listening on http://localhost:${server.port} ...`);
