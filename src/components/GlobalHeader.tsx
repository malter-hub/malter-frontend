import MalterTextBoldIcon from '@/assets/icons/logos/malterTextBold.svg'
import Button from './commons/Button'
import Link from 'next/link'

export default function GlobalHeader() {
  return (
    <header className="flex w-[1440px] items-center justify-between px-30 py-8">
      <div className="flex flex-col items-start justify-start gap-2.5 p-1">
        <Link href={`/home`}>
          <MalterTextBoldIcon height={32} />
        </Link>
      </div>
      <div className="flex items-center justify-start gap-9">
        <div className="flex items-center justify-start gap-4">
          <Button color="tertiary">
            <Link href={`/centers`}>센터찾기</Link>
          </Button>
          <Button color="tertiary" isReady={false}>
            센터입점
          </Button>
          <Button color="tertiary" isReady={false}>
            FAQ
          </Button>
        </div>
        <div className="flex items-center justify-start gap-3">
          <Button color="primary" isReady={false}>
            로그인
          </Button>
          <Button color="secondary" isReady={false}>
            회원가입
          </Button>
        </div>
      </div>
    </header>
  )
}
