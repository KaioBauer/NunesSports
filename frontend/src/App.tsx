import React, { useEffect, useState } from 'react';
import { api } from './services/api';
import { ProductForm } from './components/ProductForm';
import { ProductTable } from './components/ProductTable';
import { Product } from './types/Product';
import { ShoppingBag } from 'lucide-react';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [editing, setEditing] = useState<Product | null>(null);

  async function fetchProducts() {
    const res = await api.get('/products');
    setProducts(res.data);
  }

  async function createProduct(product: Product) {
    await api.post('/products', {
      ...product,
      price: parseFloat(product.price.toString()),
    });
    await fetchProducts();
  }

  async function updateProduct(product: Product) {
    if (!product.id) return;
    await api.put(`/products/${product.id}`, {
      ...product,
      price: parseFloat(product.price.toString()),
    });
    setEditing(null);
    await fetchProducts();
  }

  async function deleteProduct(id: string) {
    if (confirm('Tem certeza que deseja excluir?')) {
      await api.delete(`/products/${id}`);
      await fetchProducts();
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex items-center gap-3 mb-8">
          <ShoppingBag className="w-8 h-8 text-indigo-600" />
          <h1 className="text-3xl font-bold text-gray-800">Nunes Sports</h1>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            {editing ? 'Editar Produto' : 'Adicionar Novo Produto'}
          </h2>
          <ProductForm
            onSubmit={editing ? updateProduct : createProduct}
            initialData={editing}
          />
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Produtos Cadastrados
          </h2>
          <ProductTable
            products={products}
            onEdit={(product) => setEditing(product)}
            onDelete={deleteProduct}
          />
        </div>
      </div>
    </div>
  );
}

export default App;