import { defineFunction } from '@aws-amplify/backend';

export const getUserInfoLambda = defineFunction({
    name: 'get-user-info-lambda',
    entry: './handler.ts',
})