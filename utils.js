require('dotenv').config();
const { request: graphRequest } = require('graphql-request');


function getExampleQueries() {
    return require('./queries');
}

function getEnvValSafe(key) {
    const endpoint = process.env[key];
    if (endpoint === null)
        throw(`Missing env var ${key}`);
    return endpoint
}

function getGraphEndpointHosted() {
    return getEnvValSafe('GRAPH_ENDPOINT_HOSTED');
}

function getGraphEndpointDecentralized() {
    return getEnvValSafe('GRAPH_ENDPOINT_DECENTRALIZED');
}

class Executor {

    constructor() {
        this.endpoints = {
            'decentralized': getGraphEndpointDecentralized(),
            'hosted': getGraphEndpointHosted()
        };
        this.queries = getExampleQueries();
    }

    async executeQuery(key, endpointType) {
        const endpoint = this.endpoints[endpointType];
        const success = graphRequest(endpoint, this.queries[key])
            .catch(() => false)
            .then((val) => Boolean(val));
        return success;
    }

    async timeQueryExecution(key, endpointType) {
        const t0 = Date.now();
        const res = await this.executeQuery(key, endpointType)
        const t1 = Date.now();
        const executionTime = t1 - t0;
        return { executionTime, res };
    }

    async logQueryExecution(key, endpointType) {
        const { res, executionTime } = await this.timeQueryExecution(
            key,
            endpointType
        );
        console.log(`Query: ${key}`
            + ` || Success: ${res}`
            + ` || ExecutionTime: ${executionTime}ms`
            + ` || GraphConnection: ${endpointType}`
        );
    }

    async logAllQueryExecutions() {
        for (let queryKey in this.queries) {
            await Promise.all([
                this.logQueryExecution(queryKey, 'decentralized'),
                this.logQueryExecution(queryKey, 'hosted'),
            ]);
        }
    }

}

module.exports = { Executor }