import { Store, Warehouse, ShoppingCart } from 'lucide-react';
import type { ReactNode } from 'react';

type StoreItem = {
  name: string;
  icon: ReactNode;
  isActive?: boolean;
};

const myStores: StoreItem[] = [
  {
    name: 'Toko Sumber Rejeki',
    icon: <Store size={18} />,
    isActive: true,
  },
  {
    name: 'Gudang Pusat Jakarta',
    icon: <Warehouse size={18} />,
  },
  {
    name: 'Outlet Online Marketplace',
    icon: <ShoppingCart size={18} />,
  },
];

export function StoreLinks() {
  if (myStores.length === 0) return null;

  return (
    <div className="flex flex-col gap-1">
      {myStores.map((item) => (
        <div
          key={item.name}
          className={`flex w-full items-center rounded p-2 text-sm transition ${
            item.isActive
              ? 'bg-blue-50 font-medium text-blue-600'
              : 'text-gray-700 hover:bg-gray-200/40'
          }`}
        >
          <div className="flex items-center gap-3">
            {item.icon}
            {item.name}
          </div>
        </div>
      ))}
    </div>
  );
}
