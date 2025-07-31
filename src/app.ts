import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import errorMiddleware from './api/middlewares/error.middleware';
import rateLimiter from './api/middlewares/rateLimiter.middleware';
import swaggerSpec from './api/docs/swagger';
import Tip from './api/routes/Tip.route'

const app = express();

// Middleware
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(rateLimiter);


// Swagger
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/api', Tip)

// Error Handler
app.use(errorMiddleware);

export default app;
