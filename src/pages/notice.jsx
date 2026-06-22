const notices = [
  {
    id: 1,
    title: 'Mid-Term Examination Schedule Published',
    date: '22 June 2026',
    category: 'Academic',
    summary:
      'The detailed timetable for mid-term examinations for Classes 6 to 10 is now available on the school notice board and website.',
  },
  {
    id: 2,
    title: 'Parent-Teacher Meeting on Saturday',
    date: '20 June 2026',
    category: 'General',
    summary:
      'Parents are requested to attend the scheduled meeting to discuss student progress and school activities.',
  },
  {
    id: 3,
    title: 'School Uniform and ID Card Reminder',
    date: '18 June 2026',
    category: 'Administration',
    summary:
      'All students must wear proper uniforms and carry their school ID cards daily.',
  },
]

function NoticePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Notice</p>
          <h1 className="mt-1 text-3xl font-semibold text-slate-900">Latest Announcements</h1>
        </div>
        <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
          {notices.length} updates
        </span>
      </div>

      <div className="space-y-4">
        {notices.map((notice) => (
          <article key={notice.id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
                  {notice.category}
                </span>
                <h2 className="mt-2 text-xl font-semibold text-slate-900">{notice.title}</h2>
              </div>
              <span className="text-sm text-slate-500">{notice.date}</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">{notice.summary}</p>
          </article>
        ))}
      </div>
    </main>
  )
}

export default NoticePage
