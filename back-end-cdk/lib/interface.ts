import { StackProps } from "aws-cdk-lib";

export type Stage = 'prod' | 'pre-prod'

export interface BaseStackProps extends StackProps {
  stage: Stage | string;
}