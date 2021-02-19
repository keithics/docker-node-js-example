import app from '../server/app';

const request = require('supertest');

/**
 * Hook for supertest, here we can add global hooks like header for each and every API call
 * @param method HTTP method
 */
const hook = (method = 'post') => (args) =>
    request(app)
        [method](args)
        // .set('x-user-token', Global.token)

export const Request = {
    post: hook('post'),
    get: hook('get'),
    put: hook('put'),
    delete: hook('delete'),
};
