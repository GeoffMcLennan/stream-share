import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import { aws_dynamodb as dynamoDb } from 'aws-cdk-lib';
import { type } from 'os';
import { AttributeType } from 'aws-cdk-lib/aws-dynamodb';
import { CoreLambdaAPIStack } from './core-lamda-api-stack';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface CoreDatabaseStackProps extends StackProps {
  lambdaStack : CoreLambdaAPIStack,
};

export class CoreDatabaseStack extends Stack {


  private artistTable : dynamoDb.Table;
  private albumData : dynamoDb.Table;
  private songData : dynamoDb.Table;

  constructor(scope: Construct, id: string, props: CoreDatabaseStackProps) {
    super(scope, id, props);

    this.artistTable = new dynamoDb.Table(this, 'ArtistMetaDataTable', {
        tableName: 'ArtistData',
        partitionKey: {name: 'artistId', type: AttributeType.STRING},
    });

    this.artistTable.grantReadData(props.lambdaStack.artistApi);

    this.albumData = new dynamoDb.Table(this, 'AlbumMetaDataTable', {
        tableName: 'AlbumData',
        partitionKey: {name: 'artistId', type: AttributeType.STRING},
        sortKey: {name: 'albumID', type: AttributeType.STRING},
    })

    this.songData = new dynamoDb.Table(this, 'SongMetaDataTable', {
        tableName: 'SongData', 
        partitionKey: {name: 'artistId', type: AttributeType.STRING},
        sortKey: {name: 'songID', type: AttributeType.STRING},
    })
  }
}
