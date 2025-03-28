import { Product } from '../types/Product';
import { Pencil, Trash2 } from 'lucide-react';

type Props = {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
};

export function ProductTable({ products, onEdit, onDelete }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-4 py-3 text-sm font-medium text-gray-600">Nome</th>
            <th className="px-4 py-3 text-sm font-medium text-gray-600">Código</th>
            <th className="px-4 py-3 text-sm font-medium text-gray-600">Descrição</th>
            <th className="px-4 py-3 text-sm font-medium text-gray-600">Preço</th>
            <th className="px-4 py-3 text-sm font-medium text-gray-600">Ações</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {products.map((p) => (
            <tr key={p.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-4 py-3">{p.name}</td>
              <td className="px-4 py-3 font-mono text-sm">{p.code}</td>
              <td className="px-4 py-3 text-gray-600">{p.description}</td>
              <td className="px-4 py-3">
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(p.price)}
              </td>
              <td className="px-4 py-3">
                <div className="flex gap-2">
                  <button
                    onClick={() => onEdit(p)}
                    className="p-1 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                    title="Editar"
                  >
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {if(p.id) onDelete(p.id)}}
                    className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                    title="Excluir"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
          {products.length === 0 && (
            <tr>
              <td colSpan={5} className="px-4 py-8 text-center text-gray-500">
                Nenhum produto cadastrado
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}