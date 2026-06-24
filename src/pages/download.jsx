const downloads = [
  {
    title: 'Admission Form',
    type: 'PDF',
    size: '1.2 MB',
    description: 'Download the student admission application form for new enrollment.',
  },
  {
    title: 'Fee Structure',
    type: 'PDF',
    size: '0.8 MB',
    description: 'View the annual fee details and payment guidelines for all grades.',
  },
  {
    title: 'School Calendar',
    type: 'DOCX',
    size: '1.5 MB',
    description: 'Access the yearly school calendar with holidays and important events.',
  },
  {
    title: 'Student Leave Application',
    type: 'PDF',
    size: '0.6 MB',
    description: 'Download the leave request format for students and guardians.',
  },
]

function DownloadPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
      <div className="mb-8 rounded-2xl border border-blue-100 bg-white/80 p-6 shadow-sm backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1649B0]">Download</p>
        <h1 className="mt-1 text-3xl font-semibold text-[#0A1F44]">Important Documents</h1>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {downloads.map((item) => (
          <div key={item.title} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold text-[#0A1F44]">{item.title}</h2>
                <p className="mt-1 text-sm text-slate-600">{item.description}</p>
              </div>
              <span className="rounded-full bg-[#EAF2FF] px-2.5 py-1 text-xs font-semibold text-[#1649B0]">
                {item.type}
              </span>
            </div>
            <div className="mt-5 flex items-center justify-between">
              <span className="text-sm text-slate-500">{item.size}</span>
              <button className="rounded-lg bg-gradient-to-r from-[#1649B0] to-[#2B6FE8] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90">
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default DownloadPage
