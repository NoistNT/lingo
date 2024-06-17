import {
  ChallengeType,
  type ChallengeStatus,
  type challengeOptions,
  type challenges
} from '@/db/schema'
import { cn } from '@/lib/utils'

import Card from './card'

interface Props {
  disabled?: boolean
  onSelect: (id: number) => void
  options: (typeof challengeOptions.$inferSelect)[]
  selectedOption?: number
  status: ChallengeStatus
  type: (typeof challenges.$inferSelect)['type']
}

export default function Challenge({
  disabled,
  onSelect,
  options,
  selectedOption,
  status,
  type
}: Props) {
  return (
    <div
      className={cn(
        'grid gap-2',
        type === ChallengeType.ASSIST && 'grid-cols-1',
        type === ChallengeType.SELECT &&
          'grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))]'
      )}
    >
      {options.map((option, i) => (
        <Card
          key={option.id}
          audioSrc={option.audioSrc}
          disabled={disabled}
          id={option.id}
          imageSrc={option.imgSrc}
          selected={selectedOption === option.id}
          shortcut={`${i + 1}`}
          status={status}
          text={option.text}
          type={type}
          onClick={() => onSelect(option.id)}
        />
      ))}
    </div>
  )
}
