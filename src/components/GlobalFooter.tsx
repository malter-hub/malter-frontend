import MalterTextBoldIcon from '@/assets/icons/logos/malterTextBold.svg'
import Icon from './commons/Icon'
import Link from 'next/link'

export default function GlobalFooter() {
  return (
    <div className="flex w-full items-center gap-30 border-t border-r-0 border-b-0 border-l-0 border-gray-400 px-30 py-12">
      <div className="flex w-60 flex-col gap-5">
        <MalterTextBoldIcon width={100} height={40} />
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
              <Icon
                type="instagram"
                color="text-black"
                className="h-10 w-10"
              />{' '}
            </Link>
          </div>
        </div>
      </div>
      <div className="flex w-80 flex-col gap-4">
        <p className="w-full text-lg font-bold text-black">Malter Guide</p>
        <div className="flex w-full items-center justify-between gap-16">
          <div className="flex w-37 flex-col gap-4">
            <p className="text-body3 w-full font-semibold text-gray-700">PR</p>
            <p className="text-body3 w-full font-semibold text-gray-700">
              이용약관
            </p>
            <p className="text-body3 w-full font-semibold text-gray-700">
              위치기반서비스 이용약관
            </p>
          </div>
          <div className="flex w-26 flex-col gap-4">
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
