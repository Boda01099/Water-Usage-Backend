import app from './app';
import dbLoader from './loaders/db';
import logger from './utils/logger';
const PORT = process.env.PORT || 5000;
(async () => {
    await dbLoader();
    app.listen(PORT, async () => {
        logger.info(`🚀 Server running on ${process.env.NODE_ENV === 'development' ? `http://localhost:${PORT}` : `https://${process.env.BASE_URL}`}`);
    });
})();
