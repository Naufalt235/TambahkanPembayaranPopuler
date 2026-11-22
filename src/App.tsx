import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react"

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      {/* Mobile container */}
      <div className="w-full max-w-md bg-white h-screen flex flex-col relative shadow-sm font-sans">
        {/* Header */}
        <div className="flex items-center px-4 h-14 border-b border-gray-100 shrink-0">
          <button className="mr-4 text-black">
            <ArrowLeft strokeWidth={2.5} className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-bold text-gray-900">Metode pembayaran</h1>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Pembayaran yang sering digunakan (New Section) */}
          <div className="border-b border-gray-100">
            <div className="flex items-center justify-between px-4 py-4 cursor-pointer">
              <h2 className="text-[15px] font-bold text-gray-900">
                Pembayaran yang sering digunakan
              </h2>
              <ChevronUp className="w-5 h-5 text-gray-900" />
            </div>
            <div className="px-4 pb-4 flex flex-col gap-5 mt-1">
              {/* QRIS */}
              <div className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded flex items-center justify-center text-xs font-bold text-blue-600 border border-blue-200 bg-blue-50">
                    QRIS
                  </div>
                  <span className="text-[14px] text-gray-800">QRIS</span>
                </div>
                <div className="w-[18px] h-[18px] rounded-full border-[1.5px] border-gray-300"></div>
              </div>
              {/* GoPay */}
              <div className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded flex items-center justify-center text-xs font-bold text-white bg-blue-500">
                    gopay
                  </div>
                  <span className="text-[14px] text-gray-800">GoPay</span>
                </div>
                <div className="w-[18px] h-[18px] rounded-full border-[1.5px] border-gray-300"></div>
              </div>
            </div>
          </div>

          {/* Khusus di Tokopedia */}
          <div className="border-b border-gray-100">
            <div className="flex items-center justify-between px-4 py-4 cursor-pointer">
              <h2 className="text-[15px] font-bold text-gray-900">
                Khusus di Tokopedia
              </h2>
              <ChevronUp className="w-5 h-5 text-gray-900" />
            </div>
            <div className="px-4 pb-4 mt-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 opacity-40">
                  <div className="w-8 h-5 bg-green-50 border border-green-200 rounded text-[9px] font-bold text-green-700 flex items-center justify-center">
                    Rp
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[14px] text-gray-800">
                      Saldo Tokopedia
                    </span>
                    <span className="text-[12px] text-gray-400 mt-0.5">
                      Saldo tidak mencukupi: Rp0
                    </span>
                  </div>
                </div>
                <div className="w-[18px] h-[18px] rounded-full bg-gray-100 border border-gray-200"></div>
              </div>
            </div>
          </div>

          {/* Collapsed Sections */}
          <CollapsedSection title="Dompet Digital" />
          <CollapsedSection title="Kartu Kredit/Debit" />
          <CollapsedSection title="Bayar di Tempat" />
          <CollapsedSection title="Virtual Account" />
          <CollapsedSection title="Debit Instan" />
          <CollapsedSection title="Gerai Offline" />
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 px-4 py-3 bg-white shrink-0 flex items-center justify-between shadow-[0_-2px_10px_rgba(0,0,0,0.02)]">
          <div className="flex flex-col">
            <span className="text-[13px] text-gray-600">Total Bayar</span>
            <span className="text-base font-bold text-gray-900">Rp157.950</span>
          </div>
          <button className="bg-[#9ae5c0] text-white font-bold py-2 px-10 rounded-lg text-sm">
            Pilih
          </button>
        </div>

        {/* Android Navigation Bar Mock */}
        <div className="flex justify-center pb-3 pt-2 bg-white shrink-0 w-full h-12 items-center">
          <div className="flex gap-[72px] items-center text-gray-500">
            <div className="w-3.5 h-3.5 bg-gray-500 rounded-sm"></div>
            <div className="w-4 h-4 rounded-full border-2 border-gray-500"></div>
            <div className="w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-r-[11px] border-r-gray-500"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CollapsedSection({ title }: { title: string }) {
  return (
    <div className="border-b border-gray-100">
      <div className="flex items-center justify-between px-4 py-[18px] cursor-pointer">
        <h2 className="text-[15px] font-bold text-gray-900">{title}</h2>
        <ChevronDown strokeWidth={2.5} className="w-5 h-5 text-gray-900" />
      </div>
    </div>
  )
}
