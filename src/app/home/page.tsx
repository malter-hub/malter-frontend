import Button from '@/components/commons/Button'
import InfoVertical from './_components/InfoVertical'
import InfoHorizontal from './_components/InfoHorizontal'
import { verticalInfos, horizontalInfos } from '@/assets/mocks/landing'

export default function Home() {
  return (
    <div className="mb-50 flex flex-col items-center justify-center">
      <section className="mt-50 flex w-full flex-col items-center justify-center gap-16">
        <span className="flex flex-col items-center gap-5">
          <h1 className="text-heading3 font-semibold text-gray-900">
            우리 아이 언어발달, 어디서 시작할지 막막하다면
          </h1>
          <p className="text-body2 text-gray-600">
            말터에서 우리 아이에게 맞는 발달센터를 만나보세요.
          </p>
        </span>
        <span className="flex gap-6">
          <Button color="primary" size="lg">
            센터찾기
          </Button>
          <Button color="secondary" size="lg" isReady={false}>
            센터입점 하기
          </Button>
        </span>
      </section>
      <section className="mt-50 flex w-full justify-between">
        <InfoVertical
          imgUrl={verticalInfos[0].imgUrl}
          mainText={verticalInfos[0].mainText}
          subText={verticalInfos[0].subText}
        />
        <InfoVertical
          imgUrl={verticalInfos[1].imgUrl}
          mainText={verticalInfos[1].mainText}
          subText={verticalInfos[1].subText}
        />
        <InfoVertical
          imgUrl={verticalInfos[2].imgUrl}
          mainText={verticalInfos[2].mainText}
          subText={verticalInfos[2].subText}
        />
      </section>
      <section className="mt-50 flex w-full flex-col">
        <InfoHorizontal
          imgUrl={horizontalInfos[0].imgUrl}
          position="left"
          mainText={horizontalInfos[0].mainText}
          subText={horizontalInfos[0].subText}
        />
        <InfoHorizontal
          imgUrl={horizontalInfos[1].imgUrl}
          position="light"
          mainText={horizontalInfos[1].mainText}
          subText={horizontalInfos[1].subText}
        />
        <InfoHorizontal
          imgUrl={horizontalInfos[2].imgUrl}
          position="left"
          mainText={horizontalInfos[2].mainText}
          subText={horizontalInfos[2].subText}
        />
      </section>
    </div>
  )
}
