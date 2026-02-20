import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  PieChart,
  Settings,
  FileText,
  ChevronRight,
  CreditCard,
  Package,
  Truck,
  ChartNoAxesCombined,
} from 'lucide-react';
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '@/components/ui/collapsible.tsx';

const groupedItems = [
  {
    groupTitle: 'Overview',
    icon: <PieChart size={18} />,
    items: [
      { title: 'Dashboard', href: 'dashboard' },
      { title: 'Performa Penjualan', href: 'analytics/sales' },
      { title: 'Penjualan Cepat', href: 'analytics/inventory' },
    ],
  },
  {
    groupTitle: 'Inventori',
    icon: <Package size={18} />,
    items: [
      { title: 'Produk', href: 'products' },
      { title: 'Stok Barang', href: 'stocks' },
      { title: 'Kategori Produk', href: 'categories' },
    ],
  },
  {
    groupTitle: 'Pembelian',
    icon: <Truck size={18} />,
    items: [
      { title: 'Pemasok', href: 'suppliers' },
      { title: 'Purchase Order', href: 'purchase-orders' },
    ],
  },
  {
    groupTitle: 'Penjualan',
    icon: <ChartNoAxesCombined size={18} />,
    items: [
      { title: 'Pelanggan', href: 'customers' },
      { title: 'Sales Order', href: 'sales-orders' },
    ],
  },
  {
    groupTitle: 'Laporan',
    icon: <FileText size={18} />,
    items: [
      { title: 'Laporan Stok', href: 'reports/stocks' },
      { title: 'Laporan Pembelian', href: 'reports/purchases' },
      { title: 'Laporan Penjualan', href: 'reports/sales' },
    ],
  },
  {
    groupTitle: 'Pengaturan',
    icon: <Settings size={18} />,
    items: [
      { title: 'Pengaturan Toko', href: 'store-settings' },
      { title: 'Pengaturan Akun', href: 'account' },
    ],
  },
  {
    groupTitle: 'Tagihan',
    icon: <CreditCard size={18} />,
    items: [
      { title: 'Ringkasan Tagihan', href: 'billing' },
      { title: 'Paket & Langganan', href: 'billing/subscription' },
      { title: 'Riwayat Pembayaran', href: 'billing/payments' },
      { title: 'Metode Pembayaran', href: 'billing/payment-methods' },
    ],
  },
];

export function SideLinks() {
  const location = useLocation();
  const filteredGroups = groupedItems;
  const defaultOpenGroups = filteredGroups
    .filter((g) =>
      g.items.some((i) => {
        const href = `/${i.href}`;
        return location.pathname === href || location.pathname.startsWith(`${href}/`);
      }),
    )
    .map((g) => g.groupTitle);

  const [openGroups, setOpenGroups] = useState<string[]>(defaultOpenGroups);

  const toggleGroup = (groupTitle: string) => {
    setOpenGroups((prev) =>
      prev.includes(groupTitle) ? prev.filter((g) => g !== groupTitle) : [...prev, groupTitle],
    );
  };

  return (
    <>
      {filteredGroups.map((group) => {
        const isOpen = openGroups.includes(group.groupTitle);
        return (
          <Collapsible key={group.groupTitle} open={isOpen}>
            <CollapsibleTrigger
              onClick={() => toggleGroup(group.groupTitle)}
              className="flex w-full items-center justify-between rounded p-2 text-sm hover:bg-gray-200/40"
            >
              <div className="flex items-center gap-3">
                {group.icon}
                {group.groupTitle}
              </div>
              <ChevronRight
                size={18}
                className={`transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}
              />
            </CollapsibleTrigger>

            <CollapsibleContent>
              <div className="flex">
                <div className="my-1 ml-4 border-l border-gray-300" />
                <div className="flex flex-1 flex-col">
                  {group.items.map((item) => {
                    const href = `/${item.href}`;
                    const isActive =
                      location.pathname === href || location.pathname.startsWith(`${href}/`);
                    return (
                      <div key={item.title} className="px-2 py-1.5">
                        <Link
                          to={href}
                          className={`block pl-3.5 text-sm ${
                            isActive ? 'font-medium text-blue-500' : 'text-gray-700'
                          } hover:text-blue-500`}
                        >
                          {item.title}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        );
      })}
    </>
  );
}
