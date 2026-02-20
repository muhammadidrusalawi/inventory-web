import { useEffect, useState } from 'react';
import { Building2, PanelRight } from 'lucide-react';
import { Button } from '@/components/ui/button.tsx';
import { SideLinks } from '@/components/sidelinks.tsx';
import { StoreLinks } from '@/components/storelinks.tsx';
import { SidebarFooter } from '@/components/sidebarfooter.tsx';

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(() => {
    const stored = localStorage.getItem('sidebarVisible');
    return stored === null ? true : stored === 'true';
  });

  useEffect(() => {
    localStorage.setItem('sidebarVisible', String(isSidebarVisible));
  }, [isSidebarVisible]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside
        className={`fixed top-0 left-0 z-40 flex h-full w-64 flex-col border-r bg-white px-2 py-6 transition-all duration-500 ease-in-out ${
          isSidebarVisible ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <a href="#" className="flex items-center gap-2 px-2">
          <div className="text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg bg-blue-500">
            <Building2 className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">Invento Corp.</span>
            <span className="truncate text-xs">Enterprise</span>
          </div>
        </a>

        <nav className="mt-6 flex w-full flex-col overflow-y-auto px-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
          <h1 className="mb-1 text-[13px] font-medium">Platform</h1>
          <SideLinks />

          <h1 className="mt-6 mb-1 text-[13px] font-medium">Toko Saya</h1>
          <StoreLinks />
          <p className="cursor-pointer p-2 text-[13px] font-medium hover:text-blue-500 hover:underline">
            Lihat Semua Toko
          </p>
        </nav>

        <div className="mt-auto flex w-full flex-col items-center px-2 pt-4">
          <SidebarFooter />
        </div>
      </aside>

      {isSidebarVisible && (
        <div
          className="fixed inset-0 z-30 bg-black/30 md:hidden"
          onClick={() => setIsSidebarVisible(false)}
        ></div>
      )}

      <div
        className={`flex flex-1 flex-col transition-all duration-500 ${
          isSidebarVisible ? 'md:ml-64' : 'ml-0'
        } overflow-y-auto`}
      >
        <header className="sticky top-0 right-0 left-0 z-10 flex items-center justify-between px-4 py-2.5">
          <div className="flex items-center gap-2">
            <Button variant="ghost" onClick={() => setIsSidebarVisible(!isSidebarVisible)}>
              <PanelRight />
            </Button>
            <h2 className="text-sm font-medium">Dashboard</h2>
          </div>
        </header>
        <main className="flex-1 px-4 pb-4">{children}</main>
      </div>
    </div>
  );
}
