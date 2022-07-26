#!/usr/bin/env node
import 'source-map-support/register';
import 'dotenv/config';
import * as cdk from 'aws-cdk-lib';
import { BackEndCdkStack } from '../lib/back-end-cdk-stack';
import { MediaBucketStack } from '../lib/media-bucket-stack';
import { CoreDatabaseStack } from '../lib/core-database-stack';
import { CoreLambdaAPIStack } from '../lib/core-lamda-api-stack';
import { Stage } from 'aws-cdk-lib';

const app = new cdk.App();
// new BackEndCdkStack(app, 'BackEndCdkStack', {
//   /* If you don't specify 'env', this stack will be environment-agnostic.
//    * Account/Region-dependent features and context lookups will not work,
//    * but a single synthesized template can be deployed anywhere. */

//   /* Uncomment the next line to specialize this stack for the AWS Account
//    * and Region that are implied by the current CLI configuration. */
  
//   env: { account: process.env.AWS_ACCOUNT_ID, region: process.env.AWS_DEFAULT_REGION },
  

//   /* Uncomment the next line if you know exactly what Account and Region you
//    * want to deploy the stack to. */
//   // env: { account: '123456789012', region: 'us-east-1' },

//   /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
// });

console.log({ account: process.env.AWS_ACCOUNT_ID, region: process.env.AWS_DEFAULT_REGION, stage: process.env.STAGE, })

const databaseStack = new CoreDatabaseStack(app, 'CoreDatabaseStack', {
  env: { account: process.env.AWS_ACCOUNT_ID, region: process.env.AWS_DEFAULT_REGION },
  tags: { app: 'stream-share', },
})

const lambdaStack = new CoreLambdaAPIStack(app, 'CoreLambdaStack', {
  databaseStack,
  stage: process.env.STAGE || 'pre-prod',
  env: { account: process.env.AWS_ACCOUNT_ID, region: process.env.AWS_DEFAULT_REGION },
  tags: { app: 'stream-share', },
})

new MediaBucketStack(app, 'MediaBucketStack', { 
  env: { account: process.env.AWS_ACCOUNT_ID, region: process.env.AWS_DEFAULT_REGION },
  stage: process.env.STAGE || 'pre-prod',
  tags: { app: 'stream-share', },
});

