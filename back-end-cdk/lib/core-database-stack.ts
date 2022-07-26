import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import { aws_dynamodb as dynamoDb } from 'aws-cdk-lib';
import { AttributeType } from 'aws-cdk-lib/aws-dynamodb';

export class CoreDatabaseStack extends Stack {

  public readonly artistTable : dynamoDb.Table;
  public readonly albumData : dynamoDb.Table;
  public readonly songData : dynamoDb.Table;

  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);

    this.artistTable = new dynamoDb.Table(this, 'ArtistMetaDataTable', {
        tableName: 'ArtistData',
        partitionKey: {name: 'artistId', type: AttributeType.STRING},
    });

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
