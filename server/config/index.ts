export const config = {
    MONGO_URL : process.env.MONGO_URL || '',
    DEBUG_MONGO : process.env.MONGO_DEBUG || true,
    PORT: process.env.MONGO_PORT || 2017,
    NODE_HOST : process.env.NODE_HOST || 'localhost',
    NODE_PORT : process.env.NODE_PORT || 3000
}
