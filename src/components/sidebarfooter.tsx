import { Info, Headset } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = [
  {
    label: 'Hubungi Tim',
    href: '#',
    icon: <Headset size={16} />,
  },
  {
    label: 'Tentang Aplikasi',
    href: '#',
    icon: <Info size={16} />,
  },
];

export function SidebarFooter() {
  return (
    <>
      <div className="w-full">
        {footerLinks.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            className="flex items-center gap-3 rounded px-2 py-1.5 text-sm text-gray-700 hover:text-blue-500"
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
}
