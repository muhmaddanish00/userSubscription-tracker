import { Client as WorkflowClient } from "@upstash/workflow";
import dotenv from 'dotenv';
dotenv.config();


const workflowClient = new WorkflowClient({
    url: process.env.QSTASH_URL,
    token: process.env.QSTASH_TOKEN
});

export default workflowClient;
