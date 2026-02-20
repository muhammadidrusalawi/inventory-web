import { Button } from '@/components/ui/button.tsx';
import { useNavigate } from 'react-router-dom';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen flex-col bg-gray-50">
      <header className="fixed top-0 z-50 w-full border-b bg-white">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between p-4">
          <h2 className="text-2xl font-bold">Invento</h2>
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={() => navigate('/auth/sign-in')}>
              Masuk
            </Button>
            <Button onClick={() => navigate('/auth/sign-up')}>Daftar Gratis</Button>
          </div>
        </nav>
      </header>

      <main className="flex-1">{children}</main>
    </div>
  );
}
