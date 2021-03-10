/**
 * CONFIG file, either loaded via .env file or system ENV
 */
const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB
} = process.env;

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
export const config = {
    MONGO_URL : url,
    DEBUG_MONGO : process.env.MONGO_DEBUG || false,
    PORT: process.env.MONGO_PORT || 2017,
    NODE_HOST : process.env.NODE_HOST || 'localhost',
    NODE_PORT : process.env.NODE_PORT || 3000
}
