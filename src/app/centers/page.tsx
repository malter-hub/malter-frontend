import CenterList from './_components/CenterList'
import LocationFilter from './_components/LocationFilter'


export default function Centers() {
  return (
    <div className="my-[140px] flex flex-col items-center justify-center gap-25">
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="text-title2 font-semibold">
          아이에게 딱 맞는 센터를 찾아드려요
        </h1>
        <LocationFilter />
      </div>
      <CenterList />
    </div>
  )
}
