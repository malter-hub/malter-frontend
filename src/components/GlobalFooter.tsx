import Image from 'next/image'
import Link from 'next/link'
import malterTextBoldLogo from '@/public/icons/logos/malterTextBold.svg'
import InstagramIcon from '@/public/icons/socials/instagram.svg'

export default function GlobalFooter() {
  return (
    <div className="flex w-full flex-col md:flex-row md:items-center items-start gap-8 md:gap-30 border-t border-r-0 border-b-0 border-l-0 border-gray-400 px-4 md:px-30 py-12">
      <div className="flex w-full md:w-60 flex-col gap-5">
        <Image
          src={malterTextBoldLogo}
          width={100}
          height={40}
          alt="Malter Logo"
        />
        <div className="flex flex-col gap-15">
          <div className="flex flex-col gap-4">
            <p className="text-body2 w-full font-semibold text-black">
              Contact
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-body3 w-full text-black">
                malter.platform@gmail.com
              </p>
              <p className="text-body3 w-full text-black">
                © 2025 Malter. All rights reserved.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-start gap-4">
            <Link
              href="https://www.instagram.com/malter_official?igsh=MTRjOXhyb2R6OXFwNg=="
              target="_blank"
            >
              <Image
                src={InstagramIcon}
                width={40}
                height={40}
                alt="Instagram Logo"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex w-full md:w-80 flex-col gap-4">
        <p className="w-full text-lg font-bold text-black">Malter Guide</p>
        <div className="flex w-full flex-col md:flex-row md:items-center items-start justify-between gap-4 md:gap-16">
          <div className="flex w-full md:w-37 flex-col gap-4">
            <p className="text-body3 w-full font-semibold text-gray-700">PR</p>
            <p className="text-body3 w-full font-semibold text-gray-700">
              이용약관
            </p>
            <p className="text-body3 w-full font-semibold text-gray-700">
              위치기반서비스 이용약관
            </p>
          </div>
          <div className="flex w-full md:w-26 flex-col gap-4">
            <p className="text-body3 w-full font-semibold text-gray-700">
              센터입점신청
            </p>
            <p className="text-body3 w-full font-semibold text-gray-700">
              인재 영입
            </p>
            <p className="text-body3 w-full font-semibold text-gray-700">
              개인정보처리방침
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}