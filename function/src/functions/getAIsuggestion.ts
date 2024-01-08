import { 
    app, 
    HttpRequest, 
    HttpResponseInit, 
    InvocationContext 
} from "@azure/functions";

import OpenAI from 'openai';

export async function getAIsuggestion(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.get('name') || await request.text() || 'world';

    return { body: `Hello, ${name}!` };
};

app.http('getAIsuggestion', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: getAIsuggestion
});
