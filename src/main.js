const { Executor } = require('./utils');


async function run() {
    const executor = new Executor();
    await executor.logAllQueryExecutions();
}

run()
