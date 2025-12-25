'use client'

import React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const button = tv(
  {
    slots: {
      base: 'group not-prose inline-flex justify-center items-center gap-2.5 rounded-[100px] cursor-pointer w-full',
      text: '',
      icon: 'size-5',
    },
    variants: {
      color: {
        primary: {
          base: 'bg-violet-500 hover:bg-violet-600 active:bg-violet-700',
          text: 'text-white',
        },
        secondary: {
          base: 'border border-gray-500 hover:bg-gray-200 active:bg-gray-300',
          text: 'text-gray-900',
        },
        tertiary: {
          base: 'hover:bg-gray-200 active:bg-violet-200',
          text: 'text-gray-600 group-hover:text-gray-800 group-active:text-violet-600',
        },
      },
      size: {
        sm: { base: 'px-3 py-1.5', text: 'text-body3', icon: 'size-4' },
        md: { base: 'px-4 py-2', text: 'text-body2', icon: 'size-5' },
        lg: { base: 'px-8 py-[15px]', text: 'text-body1', icon: 'size-6' },
      },
    },
  },
  { twMerge: false },
)

export type ButtonVariants = VariantProps<typeof button>

interface ButtonProps extends ButtonVariants {
  children: React.ReactNode
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
  isReady?: boolean
  onClick?: () => void
  className?: string
}

export default function Button(props: ButtonProps) {
  const {
    onClick,
    leftIcon,
    rightIcon,
    children,
    size = 'sm',
    color = 'primary',
    isReady = true,
    className,
  } = props
  const { base, text, icon } = button({ color, size })

  const showNotice = () => alert('준비중입니다')

  return (
    <button
      className={className ? `${base()} ${className}` : base()}
      onClick={isReady ? onClick : showNotice}
    >
      {leftIcon ? <span className={icon()}>{leftIcon}</span> : null}
      <span className={text()}>{children}</span>
      {rightIcon ? <span className={icon()}>{rightIcon}</span> : null}
    </button>
  )
}
