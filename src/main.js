const { Executor } = require('./utils');


module.exports.run = async () => {
    const executor = new Executor();
    await executor.logAllQueryExecutions();
}
