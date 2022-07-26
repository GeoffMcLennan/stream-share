import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from "aws-lambda";
import { clientErrorResponse, serverErrorResponse, successResponse } from "../util/apiResponse";
import { getArtist } from "./get";

/**
 * Artist API handler
 * Base path: /artist/:artistId
 * 
 * @param event APIGatewayProxyEvent 
 * @param context 
 */
export const handler: APIGatewayProxyHandler = async (event, context): Promise<APIGatewayProxyResult> => {
    try {
        let response;
        let error;
        switch (event.httpMethod) {
            case 'GET': 
                ({response, error} = await getArtist(parseArtistId(event)))
                break;
            default:
                throw new Error('Handler not found')
        }
        if (error || !response) {
            return clientErrorResponse(error);
        }
        return successResponse(response);
    } catch (e) {
        return serverErrorResponse(`Unexpected server error: ${e instanceof Error ? e.message : e}`);
    }
}

const parseArtistId = (event: APIGatewayProxyEvent): string | undefined => {
    return event.pathParameters?.['artistId'];
}