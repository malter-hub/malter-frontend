'use client'

import { useState, useEffect } from 'react'
import Button from './commons/Button'
import Link from 'next/link'
import Image from 'next/image'
import malterTextBoldLogo from '@/public/icons/logos/malterTextBold.svg'
import MenuIcon from '@/public/icons/menu.svg'
import CloseIcon from '@/public/icons/close.svg'
import { useRouter } from 'next/navigation'

export default function GlobalHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <header className="relative flex w-full items-center justify-between px-4 py-4 md:py-8 md:px-2">
      <div className="flex flex-col items-start justify-start gap-2.5">
        <Link href={`/home`} onClick={closeMenu}>
          <Image
            src={malterTextBoldLogo}
            width={100}
            height={40}
            alt="Malter Logo"
            className="w-20 md:w-24"
          />
        </Link>
      </div>
      <div className="hidden md:flex items-center justify-between">
        <div className="flex items-center justify-start gap-4 w-[350px]">
          <Link className='w-full' href={`/centers`} onClick={closeMenu}>  <Button color="tertiary" >센터찾기</Button>     </Link>
          <Button color="tertiary" isReady={false}>
            센터입점
          </Button>
          <Button color="tertiary" isReady={false}>
            FAQ
          </Button>
        </div>
        <div className="flex items-center justify-start gap-3 w-[35%]">
          <Button color="primary" isReady={false}>
            로그인
          </Button>
          <Button color="secondary" isReady={false}>
            회원가입
          </Button>
        </div>
      </div>
      <span className='w-12 h-12 flex items-center justify-center md:hidden'>
        <Button color="tertiary" onClick={toggleMenu}><Image src={MenuIcon} width={40} height={40} alt="Menu" /></Button>
      </span>
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={closeMenu}
          />
          <div
            className="fixed top-0 left-0 h-full w-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col p-4 gap-4 h-full overflow-y-auto">
              {/* 닫기 버튼 */}
              <div className="flex justify-end">
                <span className='w-12 h-12 flex justify-center items-center'>
                  <Button color="tertiary" className="md:hidden" onClick={closeMenu}><Image src={CloseIcon} width={40} height={40} alt="Menu" /></Button>
                </span>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                  <Link href={`/centers`} onClick={closeMenu}>
                    <Button color="tertiary" className="w-full justify-start">
                      센터찾기
                    </Button>
                  </Link>
                  <Button color="tertiary" isReady={false} className="w-full justify-start">
                    센터입점
                  </Button>
                  <Button color="tertiary" isReady={false} className="w-full justify-start">
                    FAQ
                  </Button>
                </div>

                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex flex-col gap-3">
                    <Button color="primary" isReady={false} className="w-full">
                      로그인
                    </Button>
                    <Button color="secondary" isReady={false} className="w-full">
                      회원가입
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  )
}


