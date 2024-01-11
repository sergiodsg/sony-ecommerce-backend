import { Router } from "express";
import { prisma } from '../prisma.js';

const router = Router();

router.get('/products', async (req, res) => {
  const products = await prisma.product.findMany();
  return res.json(products);
})

router.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  const product = await prisma.product.findUnique({
    where: {
      id: parseInt(id),
    }
  });

  if(!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  return res.json(product);
});

export default router;