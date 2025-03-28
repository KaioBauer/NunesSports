import express from 'express';
import cors from 'cors';
import { ProductController } from './modules/product/controller/ProductController';

const app = express();
const controller = new ProductController();

app.use(cors());
app.use(express.json());

const asyncHandler = (fn: any) => (req: any, res: any, next: any) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
  
  app.get('/products', asyncHandler(controller.index));
  app.get('/products/:id', asyncHandler(controller.show));
  app.post('/products', asyncHandler(controller.store));
  app.put('/products/:id', asyncHandler(controller.update));
  app.delete('/products/:id', asyncHandler(controller.destroy));
  

app.listen(3000, () => console.log('Backend rodando na porta 3000'));

