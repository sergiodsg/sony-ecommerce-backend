import express from 'express';
import ProductRoutes from './routes/product.routes.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', ProductRoutes);

app.listen(3000);
console.log('Server on port', 3000);