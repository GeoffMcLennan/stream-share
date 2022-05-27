import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { aws_lambda as lambda } from 'aws-cdk-lib';
import { Code, Runtime } from 'aws-cdk-lib/aws-lambda';
import * as path from 'path';

export class CoreLambdaAPIStack extends Stack {

    public artistApi : lambda.Function; 

    constructor(scope: Construct, id: string, props?: StackProps) {
      super(scope, id, props);

      this.artistApi = new lambda.Function(this, 'ArtistAPI', {
          functionName: 'ArtistAPI',
          runtime: Runtime.NODEJS_14_X,
          code: Code.fromAsset(path.join(__dirname, '../lambda/artist')),
          handler: 'index.handler'
      }) 
  
    }
  }