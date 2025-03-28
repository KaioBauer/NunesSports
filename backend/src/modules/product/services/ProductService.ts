import { prisma } from '../../../prisma/client';

export class ProductService {
  async getAll() {
    return prisma.product.findMany();
  }

  async getById(id: string) {
    return prisma.product.findUnique({ where: { id } });
  }

  async create(data: any) {
    return prisma.product.create({ data });
  }

  async update(id: string, data: any) {
    return prisma.product.update({ where: { id }, data });
  }

  async delete(id: string) {
    return prisma.product.delete({ where: { id } });
  }
}
