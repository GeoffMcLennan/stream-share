import { DynamoDB } from 'aws-sdk';
import { HandlerResponse } from "../util/apiResponse";

const dynamoDb = new DynamoDB.DocumentClient();

export const getArtist = async (artistId: string | undefined): Promise<HandlerResponse> => {
  if (!artistId) {
    return {
      error: 'Invalid request, missing artistId',
    }
  }
  try {
    const response = await dynamoDb.get({
      TableName: process.env.ARTIST_TABLE_NAME!,
      Key: {
        artistId
      }
    }).promise();
    if (!response.Item) {
      return {
        error: `No artist found for artistId: ${artistId}`,
      };
    }
    return {
      response: response.Item,
    };
  } catch (e) {
    console.log(e);
    throw e;
  }
}