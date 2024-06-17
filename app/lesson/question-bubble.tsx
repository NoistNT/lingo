import Image from 'next/image'

export default function QuestionBubble({ question }: { question: string }) {
  return (
    <div className="mb-6 flex items-center gap-x-4">
      <Image
        alt="Mascot"
        className="hidden lg:block"
        height={60}
        src="/mascot.svg"
        width={60}
      />
      <Image
        alt="Mascot"
        className="block lg:hidden"
        height={60}
        src="/mascot.svg"
        width={60}
      />
      <div className="relative rounded-xl border-2 px-4 py-2 text-sm lg:text-base">
        {question}
        <div className="absolute -left-3 top-1/2 h-0 w-0 -translate-y-1/2 rotate-90 transform border-x-8 border-t-8 border-x-transparent" />
      </div>
    </div>
  )
}
