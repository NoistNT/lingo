export default function FeedWrapper({
  children
}: {
  children: React.ReactNode
}) {
  return <div className="relative top-0 flex-1 pb-0">{children}</div>
}
