const grades = ["Class 5", "Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12"]

export function GradesSection() {
  return (
    <section id="grades" className="mx-auto max-w-6xl px-5 py-8">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-[#7C4DFF]">
          Locked to your exact grade
        </p>
        <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">NCERT Grades Covered</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {grades.map((grade) => (
            <span
              key={grade}
              className="rounded-full border border-white/10 bg-[#0D0F12] px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:border-[#00E676]/50 hover:text-white"
            >
              {grade}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
