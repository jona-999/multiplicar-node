const util = require('util');
const sleep = util.promisify(setTimeout);

module.exports = {
    async taskONe() {
        await sleep(4000);
        return 'ONE VALUE';
    },
    async taskTwo() {
        await sleep(2000);
        return 'TWO VALUE';
    }
};