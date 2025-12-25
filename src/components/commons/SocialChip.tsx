'use client'

import { tv, type VariantProps } from 'tailwind-variants'
import Image from 'next/image'
import CommentIcon from '@/public/icons/comment.svg'
import FavoriteIcon from '@/public/icons/favorite.svg'


const chip = tv(
  {
    slots: {
      base: 'flex justify-between items-center rounded-2xl',
      text: 'flex justify-center text-black w-7 font-regular text-gray-700',
      icon: '',
    },
    variants: {
      styleType: {
        comment: {
          base: 'bg-blue-100',
          icon: 'text-blue-500',
        },
        favorite: {
          base: 'bg-red-100',
          icon: 'text-red-500',
        },
      },
      size: {
        sm: {
          base: 'gap-2 px-3 py-1.5',
          text: 'text-body4',
          icon: 'w-4.5 h-4.5',
        },
      },
    },
  },
  { twMerge: false },
)

export type ChipVariants = VariantProps<typeof chip>

interface ChipProps extends ChipVariants {
  value: string
}

export default function SocialChip(props: ChipProps) {
  const { value = '0', size = 'sm', styleType = 'comment' } = props
  const { base, text, icon } = chip({ size, styleType })

  return (
    <div className={base()}>
      {styleType === 'comment' && <Image
        src={CommentIcon}
        width={20}
        height={20}
        alt="Instagram Logo"
      />}
      {styleType === 'favorite' && <Image
        src={FavoriteIcon}
        width={20}
        height={20}
        alt="Instagram Logo"
      />}
      <span className={text()}>{value}</span>
    </div>
  )
}
