import { useEffect, useState } from 'react';
import { Product } from '../types/Product';

type Props = {
  onSubmit: (product: Product) => void;
  initialData?: Product | null;
};

export function ProductForm({ onSubmit, initialData = null }: Props) {
  const [form, setForm] = useState<Product>({
    name: '',
    code: '',
    description: '',
    price: 0
  });

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    } else {
      setForm({ name: '', code: '', description: '', price: 0 });
    }
  }, [initialData]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) : value
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit(form);
    if (!initialData) {
      setForm({ name: '', code: '', description: '', price: 0 });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Nome do Produto</label>
        <input
          name="name"
          placeholder="Ex: Bola de Futebol"
          value={form.name}
          onChange={handleChange}
          className="w-full rounded-lg border-gray-300 border p-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Código</label>
        <input
          name="code"
          placeholder="Ex: BF-001"
          value={form.code}
          onChange={handleChange}
          className="w-full rounded-lg border-gray-300 border p-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
          required
        />
      </div>

      <div className="space-y-2 md:col-span-2">
        <label className="block text-sm font-medium text-gray-700">Descrição</label>
        <textarea
          name="description"
          placeholder="Descrição detalhada do produto"
          value={form.description}
          onChange={handleChange}
          className="w-full rounded-lg border-gray-300 border p-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
          rows={3}
          required
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Preço (R$)</label>
        <input
          name="price"
          type="number"
          step="0.01"
          placeholder="0.00"
          value={form.price}
          onChange={handleChange}
          className="w-full rounded-lg border-gray-300 border p-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
          required
        />
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          className="w-full md:w-auto px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition"
        >
          {initialData ? 'Atualizar Produto' : 'Cadastrar Produto'}
        </button>
      </div>
    </form>
  );
}