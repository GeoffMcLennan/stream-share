import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import { aws_s3 as s3 } from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { BaseStackProps } from './interface';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class MediaBucketStack extends Stack {

  private audioBucket: Bucket;
  private imageBucket: Bucket;

  constructor(scope: Construct, id: string, props: BaseStackProps) {
    super(scope, id, props);

    this.audioBucket = new s3.Bucket(this, 'AudioBucket', {
      bucketName: `stream-share-audio-bucket-${props.stage}`,
      versioned: true,
    });

    this.imageBucket = new s3.Bucket(this, 'ImageBucket', {
      bucketName: `stream-share-image-bucket-${props.stage}`,
      versioned: true,
    });
  }
}
