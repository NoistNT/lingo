export default function StartLessonTooltip() {
  return (
    <div className="relative h-24 w-24">
      <div className="left-2.4 absolute -top-8 z-10 animate-bounce rounded-xl border-2 bg-white px-3 py-2 font-bold uppercase tracking-wide text-green-500 dark:bg-neutral-900">
        Start
        <div className="absolute -bottom-2 left-1/2 h-0 w-0 -translate-x-1/2 transform border-x-8 border-t-8 border-x-transparent" />
      </div>
    </div>
  )
}
