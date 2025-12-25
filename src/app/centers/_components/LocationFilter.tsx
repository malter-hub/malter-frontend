import Button from '@/components/commons/Button'

export default function LocationFilter() {
  return (
    <span className="flex gap-3 md:gap-5">
      <Button color="tertiary" size="md">
        전체
      </Button>
      <Button color="tertiary" size="md">
        서울
      </Button>
      <Button color="tertiary" size="md">
        경기
      </Button>
      <Button color="tertiary" size="md">
        부산
      </Button>
      <Button color="tertiary" size="md">
        대구
      </Button>
    </span>
  )
}
