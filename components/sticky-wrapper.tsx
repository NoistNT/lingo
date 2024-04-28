export default function StickyWrapper({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="sticky bottom-6 z-10 hidden w-96 self-end lg:block">
      <div className="sticky top-6 flex min-h-[calc(100vh-48px)] flex-col gap-y-4">
        {children}
      </div>
    </div>
  )
}
