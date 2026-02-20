import { useState } from 'react';
import { Check, CreditCard, Warehouse } from 'lucide-react';

export default function CreateStore() {
  const [step, setStep] = useState<number>(1);

  const nextStep = () => setStep(2);
  const prevStep = () => setStep(1);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-2xl rounded-2xl border bg-white p-8">
        <div className="mb-10">
          <div className="flex items-center gap-1 px-3">
            <div className="bo flex items-center justify-center rounded-full bg-blue-50 p-3 text-blue-500">
              <Check size={20} />
            </div>
            <div
              className={`h-0.5 flex-1 rounded-full ${step >= 1 ? 'bg-blue-500' : 'bg-gray-300'}`}
            />
            <div className="flex items-center justify-center rounded-full bg-blue-50 p-3 text-blue-500">
              {step === 2 ? <Check size={20} /> : <Warehouse size={20} />}
            </div>
            <div className="h-0.5 flex-1 rounded-full bg-gray-300">
              {step === 2 && <div className="h-0.5 w-full bg-blue-500" />}
            </div>
            <div
              className={`flex items-center justify-center rounded-full p-3 ${
                step === 2 ? 'bg-blue-50 text-blue-500' : 'bg-gray-100 text-gray-500'
              }`}
            >
              <CreditCard size={20} />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-muted-foreground text-sm">Registrasi</p>
            <p className="text-muted-foreground text-sm">Data Toko</p>
            <p className="text-muted-foreground text-sm">Pembayaran</p>
          </div>
        </div>

        <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
          <div className="overflow-hidden">
            <div
              className={`flex transition-transform duration-300 ease-in-out ${
                step === 1 ? 'translate-x-0' : '-translate-x-full'
              }`}
            >
              <div className="w-full flex-shrink-0 space-y-4">
                <div className="flex flex-col">
                  <label htmlFor="name">Nama Toko</label>
                  <input
                    type="text"
                    id="name"
                    className="mt-2 rounded-md border border-gray-300 px-3 py-2"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="description">Deskripsi</label>
                  <textarea
                    id="description"
                    className="mt-2 rounded-md border border-gray-300 px-3 py-2"
                  />
                </div>
              </div>

              <div className="w-full flex-shrink-0 space-y-2">
                <label htmlFor="plan">Paket Toko</label>
                <select id="plan" className="mt-2 rounded-md border border-gray-300 px-3 py-2">
                  <option value="starter">Starter - Gratis</option>
                  <option value="pro">Pro - Berbayar</option>
                  <option value="enterprise">Enterprise</option>
                </select>
              </div>
            </div>
          </div>

          {/* Tombol navigasi */}
          <div className="mt-6 flex items-center">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="rounded-md border px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Kembali
              </button>
            )}
            {step < 2 && (
              <button
                type="button"
                onClick={nextStep}
                className="ml-auto rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              >
                Lanjut
              </button>
            )}
            {step === 2 && (
              <button
                type="submit"
                className="ml-auto rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              >
                Buat
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
// import { useState } from 'react';
// import { CreditCard, ShoppingCart } from 'lucide-react';
//
// export default function CreateStore() {
//   const [step, setStep] = useState<number>(1);
//
//   const nextStep = () => setStep((prev) => prev + 1);
//   const prevStep = () => setStep((prev) => prev - 1);
//
//   return (
//     <div className="flex h-screen items-center justify-center bg-gray-50 p-4">
//       <div className="w-full max-w-lg rounded-xl border bg-white p-6">
//         {/* Icon & Title */}
//         <div className="mb-4 flex flex-col items-center">
//           {step === 1 ? (
//             <ShoppingCart className="h-12 w-12 text-blue-500" />
//           ) : (
//             <CreditCard className="h-12 w-12 text-green-500" />
//           )}
//           <h1 className="mt-2 text-2xl font-bold">Buat Toko</h1>
//           <p className="mt-1 text-sm text-gray-500">
//             {step === 1 ? 'Isi info toko' : 'Pilih paket langganan'}
//           </p>
//         </div>
//
//         {/* Progress line */}
//         <div className="mb-6 flex items-center">
//           <div className={`h-1 flex-1 rounded-full ${step >= 1 ? 'bg-blue-500' : 'bg-gray-300'}`} />
//           <div className="mx-2 h-1 flex-1 rounded-full bg-gray-300">
//             {step === 2 && <div className="h-1 w-full bg-blue-500" />}
//           </div>
//         </div>
//
//         <form className="flex h-96 flex-col justify-between space-y-4">
//           {step === 1 && (
//             <>
//               <div className="flex flex-col">
//                 <label htmlFor="name">Nama Toko</label>
//                 <input type="text" className="mt-2 rounded-md border border-gray-300 px-3 py-2" />
//               </div>
//
//               <div className="flex flex-col">
//                 <label htmlFor="description">Deskripsi</label>
//                 <textarea className="mt-2 rounded-md border border-gray-300 px-3 py-2" />
//               </div>
//
//               <div className="flex flex-col">
//                 <label htmlFor="address">Alamat</label>
//                 <textarea className="mt-2 rounded-md border border-gray-300 px-3 py-2" />
//               </div>
//             </>
//           )}
//
//           {step === 2 && (
//             <div className="flex flex-col space-y-2">
//               <label htmlFor="plan">Paket Toko</label>
//               <select className="mt-2 rounded-md border border-gray-300 px-3 py-2">
//                 <option value="starter">Starter - Gratis</option>
//                 <option value="pro">Pro - Berbayar</option>
//                 <option value="enterprise">Enterprise</option>
//               </select>
//             </div>
//           )}
//
//           <div className="flex items-center">
//             {step > 1 && (
//               <button
//                 type="button"
//                 onClick={prevStep}
//                 className="rounded-md border px-4 py-2 text-gray-700 hover:bg-gray-100"
//               >
//                 Kembali
//               </button>
//             )}
//             {step < 2 && (
//               <button
//                 type="button"
//                 onClick={nextStep}
//                 className="ml-auto rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
//               >
//                 Lanjut
//               </button>
//             )}
//             {step === 2 && (
//               <button
//                 type="submit"
//                 className="ml-auto rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
//               >
//                 Buat
//               </button>
//             )}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
