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
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Download</p>
        <h1 className="mt-1 text-3xl font-semibold text-slate-900">Important Documents</h1>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {downloads.map((item) => (
          <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
                <p className="mt-1 text-sm text-slate-600">{item.description}</p>
              </div>
              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                {item.type}
              </span>
            </div>
            <div className="mt-5 flex items-center justify-between">
              <span className="text-sm text-slate-500">{item.size}</span>
              <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
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
