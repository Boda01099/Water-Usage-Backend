import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Wasting Water API',
            version: '1.0.0',
            description: 'A simple Wasting Water API',
        },
        servers: [
            {
                url: `${process.env.NODE_ENV === 'development' ? `http://localhost:${process.env.PORT}` : `https://${process.env.BASE_URL}`}`,
                description: 'Development server',
            },
        ]
    },
    apis: ['src/api/routes/*.ts'],
    basePath: '/api'
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;