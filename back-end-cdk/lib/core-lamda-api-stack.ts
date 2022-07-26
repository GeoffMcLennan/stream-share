import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { aws_lambda as lambda } from 'aws-cdk-lib';
import { Code, Runtime } from 'aws-cdk-lib/aws-lambda';
import * as path from 'path';
import { BaseStackProps } from './interface';
import { CoreDatabaseStack } from './core-database-stack';

interface CoreLambdaAPIStackProps extends BaseStackProps {
  readonly databaseStack: CoreDatabaseStack;
}

export class CoreLambdaAPIStack extends Stack {

    public readonly artistApi : lambda.Function; 

    constructor(scope: Construct, id: string, props: CoreLambdaAPIStackProps) {
      super(scope, id, props);

      this.artistApi = new lambda.Function(this, 'ArtistAPI', {
          functionName: 'ArtistAPI',
          runtime: Runtime.NODEJS_14_X,
          code: Code.fromAsset(path.join(__dirname, '../node_modules/@stream-share/lambda/build/artist')),
          handler: 'index.handler',
          environment: {
            ARTIST_TABLE_NAME: props.databaseStack.artistTable.tableName,
          },
      });

      props.databaseStack.artistTable.grantReadData(this.artistApi);
    }
  }