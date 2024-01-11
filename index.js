import express from 'express';
import ProductRoutes from './routes/product.routes.js'

const app = express();

app.use(express.json());
app.use('/api', ProductRoutes);

app.listen(3000);
console.log('Server on port', 3000);