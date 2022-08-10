import { APIGatewayProxyResult } from "aws-lambda";

export interface HandlerResponse {
  readonly response?: any;
  readonly error?: string;
}

export const successResponse = (body: any): APIGatewayProxyResult => ({
  statusCode: 200,
  body,
})

export const clientErrorResponse = (msg: string | undefined, e?: Error): APIGatewayProxyResult => ({
  statusCode: 400,
  body: `${msg}${e ? '\nCaused by: ' + e.name : ''}`,
});

export const serverErrorResponse = (msg: string, e?: Error): APIGatewayProxyResult => ({
  statusCode: 500,
  body: `${msg}${e ? '\nCaused by: ' + e.name : ''}`,
});