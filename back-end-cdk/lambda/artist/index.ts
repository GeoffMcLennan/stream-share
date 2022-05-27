import { APIGatewayProxyHandler } from "aws-lambda";

const getArtist = (artistId : String) => {
    
}


export const handler: APIGatewayProxyHandler = (event, context ) => {
    
    console.log("hello");

    switch (event.httpMethod) {
        case 'GET': 
            
    }
}