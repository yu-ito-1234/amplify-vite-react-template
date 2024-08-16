import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { getUserInfoLambda } from './function/get-user-info-lambda/resource'

const backend = defineBackend({
  auth,
  data,
  getUserInfoLambda,
});

// フロントエンドからLambdaを呼び出せるように設定
backend.addOutput({
  custom: {
    getUserInfoLambdaFunctionName: backend.getUserInfoLambda.resources.lambda.functionName,
   },
});