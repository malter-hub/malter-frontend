interface IProps {
  imgUrl?: string
  mainText: string
  subText: string
}

export default function InfoVertical(props: IProps) {
  const { imgUrl = 'https://picsum.photos/300/300', mainText, subText } = props
  return (
    <div className="flex w-[300px] flex-col gap-5">
      <img src={imgUrl} className="h-[300px] object-cover" />
      <div className="flex w-full flex-col items-start justify-start gap-2">
        <p className="text-title3 w-full text-left font-semibold text-gray-900">
          {mainText}
        </p>
        <p className="text-body3 font-regular w-full text-left text-gray-600">
          {subText}
        </p>
      </div>
    </div>
  )
}
