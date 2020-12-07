#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CiCdPipelineStack } from '../lib/ci-cd_pipeline-stack';

const app = new cdk.App();
new CiCdPipelineStack(app, 'CiCdPipelineStack');
