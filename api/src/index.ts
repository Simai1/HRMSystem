import { Server } from 'http';
import app from './app';
import dbUtils from './utils/db';
import dotenv from 'dotenv'; // eslint-disable-line

const PORT = process.env.PORT || 3000;


(async function initDb() {
    try {
        await dbUtils.initializeDbModels();
        if (process.env.NODE_ENV === 'development') {
            // await testUtils.fillWorkload();
            // await testUtils.fillEducators();
        }
    } catch (e) {
        console.log(e);
        console.log('COULD NOT CONNECT TO THE DB, retrying in 5 seconds');
        setTimeout(initDb, 5000);
    }
})();

console.log(`Node env: ${process.env.NODE_ENV}`);
app.listen(PORT, () => console.log(`Listen on :${PORT}`));

// const exitHandler = () => {
//     if (server) {
//         server.close(() => {
//             console.log('Server closed');
//             process.exit(1);
//         });
//     } else {
//         process.exit(1);
//     }
// };
//
// const unexpectedErrorHandler = (error: unknown) => {
//     console.log(error);
//     exitHandler();
// };
//
// process.on('uncaughtException', unexpectedErrorHandler);
// process.on('unhandledRejection', unexpectedErrorHandler);
