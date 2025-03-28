import { Request, Response } from 'express';
import { ProductService } from '../services/ProductService';

const service = new ProductService();

export class ProductController {
  async index(req: Request, res: Response) {
    const products = await service.getAll();
    return res.json(products);
  }

  async show(req: Request, res: Response) {
    const product = await service.getById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Not found' });
    return res.json(product);
  }

  async store(req: Request, res: Response) {
    const product = await service.create(req.body);
    return res.status(201).json(product);
  }

  async update(req: Request, res: Response) {
    const product = await service.update(req.params.id, req.body);
    return res.json(product);
  }

  async destroy(req: Request, res: Response) {
    await service.delete(req.params.id);
    return res.status(204).send();
  }
}
