import { KeyRound, LogIn, User } from 'lucide-react';

export default function Login() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="mx-auto flex w-full max-w-md flex-col">
        <div className="mb-10 text-left tracking-tight">
          <h2 className="text-3xl font-bold text-gray-800">Masuk ke Akun Anda</h2>
          <p className="text-muted-foreground mt-1">
            Akses sistem untuk mengelola stok dan operasional bisnis Anda
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">Email</label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <User size={20} className="text-gray-400" />
              </div>
              <input
                type="email"
                className="w-full rounded-lg border bg-gray-50 py-3 pr-4 pl-10 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan email"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <KeyRound size={20} className="text-gray-400" />
              </div>
              <input
                type="password"
                className="w-full rounded-xl border bg-gray-50 py-3 pr-12 pl-10 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                Ingat saya
              </label>
            </div>
            <div>
              <a href="#" className="text-sm font-medium text-blue-600 hover:underline">
                Lupa password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center rounded-xl border border-transparent bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 text-base font-medium text-white shadow-sm transition hover:from-blue-700 hover:to-cyan-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
          >
            <LogIn size={20} className="mr-2" />
            Masuk
          </button>

          <div className="flex items-center">
            <div className="flex-grow border-t"></div>
            <span className="px-3 text-xs text-gray-500">Atau</span>
            <div className="flex-grow border-t"></div>
          </div>

          <button
            type="button"
            className="flex w-full items-center justify-center rounded-xl border bg-transparent px-4 py-3 text-base font-medium transition focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
          >
            <svg
              className="mr-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 533.5 544.3"
            >
              <path
                fill="#4285F4"
                d="M533.5 278.4c0-17.3-1.5-34-4.3-50.4H272v95.3h147.4c-6.4 34.3-25.7 63.4-54.8 82.8v68.9h88.7c52.1-48 82.2-118.5 82.2-196.6z"
              />
              <path
                fill="#34A853"
                d="M272 544.3c73.6 0 135.4-24.3 180.5-65.9l-88.7-68.9c-24.6 16.5-56.1 26-91.8 26-70.7 0-130.6-47.7-152-111.6H31.6v70.2C76.9 482.6 167 544.3 272 544.3z"
              />
              <path
                fill="#FBBC05"
                d="M120 324.7c-4.9-14.7-7.7-30.3-7.7-46.3s2.8-31.6 7.7-46.3V161.9H31.6C11.1 203.3 0 248.8 0 272s11.1 68.7 31.6 110.1l88.4-57.4z"
              />
              <path
                fill="#EA4335"
                d="M272 107.7c39.9 0 75.5 13.7 103.7 40.7l77.8-77.8C407.5 24.3 345.7 0 272 0 167 0 76.9 61.7 31.6 161.9l88.4 70.2c21.4-63.9 81.3-111.6 152-111.6z"
              />
            </svg>
            Masuk dengan Google
          </button>
        </form>

        <div className="mt-10 border-t border-gray-200 pt-6">
          <p className="text-center text-xs text-gray-500">
            Dengan masuk ke sistem, Anda menyetujui{' '}
            <a href="#" className="text-blue-600 hover:text-blue-500">
              Kebijakan Privasi
            </a>{' '}
            dan{' '}
            <a href="#" className="text-blue-600 hover:text-blue-500">
              Ketentuan Layanan
            </a>{' '}
            Invento.
          </p>
        </div>
      </div>
    </div>
  );
}
