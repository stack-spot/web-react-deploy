#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import {{project_name|to_camel}}Stack from '../lib/infra-stack';
import { join } from 'path';

const app = new cdk.App();
const stage = app.node.tryGetContext('stage');
let account = process.env['AWS_ACCOUNT_ID'];
let region = process.env['AWS_REGION'];
let stageData = {} as any;

if(stage != undefined){
  const stageFilePath = join('stages', stage + '.json');
  stageData = require(join('../..', stageFilePath));
  const awsData = stageData['cloud']['account'];
  account = awsData['id'];
  region = awsData['region'];
}

new {{project_name|to_camel}}Stack(app, '{{project_name|to_camel}}Stack', {
  env: { account, region },
});