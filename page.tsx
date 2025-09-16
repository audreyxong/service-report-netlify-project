const base = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function ServiceReport() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto w-full max-w-5xl p-6 print:p-4">
        <header className="border-b-4 border-blue-900 pb-3">
          <div className="flex items-center justify-between gap-4">
            {/* <img src={`${base}/logo.png`} alt="IMI" className="h-10 w-auto" /> */}
            <div>
              <h1 className="text-2xl font-extrabold tracking-wide text-blue-900">
                IMI CORPORATION PTE. LTD.
              </h1>
              <p className="text-xs leading-5">
                No. 13, Joo Koon Crescent, Singapore 629021<br />
                Tel: (65) 6861 4222 | Fax: (65) 6862 4222<br />
                sales@imicorp.com.sg | www.imicorp.com.sg<br />
                Co. Reg. No.: 199205115N | GST No.: M2-0109564-6
              </p>
            </div>
          </div>
        </header>

        <section className="mt-4">
          <div className="text-sm font-semibold text-blue-900 mb-1">SERVICE REPORT</div>
          <table className="w-full border text-xs">
            <tbody>
              <tr className="border">
                <td className="w-1/4 border p-2 font-semibold">Customer Name</td>
                <td className="w-1/4 border p-2">__________</td>
                <td className="w-1/4 border p-2 font-semibold">Vessel Name</td>
                <td className="w-1/4 border p-2">__________</td>
              </tr>
              <tr className="border">
                <td className="border p-2 font-semibold">Reference No.</td>
                <td className="border p-2">__________</td>
                <td className="border p-2 font-semibold">Job Number</td>
                <td className="border p-2">__________</td>
              </tr>
              <tr className="border">
                <td className="border p-2 font-semibold">Job Date</td>
                <td className="border p-2">__ / __ / ____</td>
                <td className="border p-2 font-semibold">Location</td>
                <td className="border p-2">__________</td>
              </tr>
              <tr className="border">
                <td className="border p-2 font-semibold">Service Type</td>
                <td className="border p-2" colSpan={3}>
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-block h-3 w-3 rounded-sm border" /> Troubleshooting
                  </span>
                  <span className="ml-6 inline-flex items-center gap-2">
                    <span className="inline-block h-3 w-3 rounded-sm border" /> Inspection
                  </span>
                  <span className="ml-6 inline-flex items-center gap-2">
                    <span className="inline-block h-3 w-3 rounded-sm border" /> Dry-Docking
                  </span>
                  <span className="ml-6 inline-flex items-center gap-2">
                    <span className="inline-block h-3 w-3 rounded-sm border" /> Others: _______
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mt-6">
          <h2 className="bg-blue-900 px-3 py-1 text-lg font-semibold text-white">Findings</h2>
          <div className="mt-3 grid grid-cols-3 gap-3">
            {[1,2,3,4,5,6].map((i) => (
              <figure key={i} className="border p-2">
                <div className="h-40 w-full bg-gray-100 border" />
                <figcaption className="mt-2 text-xs text-gray-700">
                  Caption {i}: ________________________
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="mt-6">
          <h2 className="bg-blue-900 px-3 py-1 text-lg font-semibold text-white">Summary</h2>
          <div className="border p-3 text-sm">
            [Insert summary of work done and recommendations.]
          </div>
          <button
            onClick={() => window.print()}
            className="print:hidden mt-4 rounded bg-blue-600 px-3 py-2 text-white"
          >
            Print to PDF
          </button>
        </section>

        <footer className="mt-6 border-t-4 border-blue-900 pt-3 text-center text-xs">
          Prepared By: __________ &nbsp; | &nbsp; Date: __________ &nbsp; | &nbsp; Page 1
        </footer>
      </div>
    </main>
  );
}
