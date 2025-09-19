import { centers } from '@/assets/mocks/centers'
import CenterItem from './CenterItem'

export default function CenterList() {
  return (
    <ul className="flex flex-wrap gap-x-30 gap-y-28">
      {centers.map((center) => (
        <li key={center.id}>
          <CenterItem
            id={center.id}
            name={center.name}
            location={center.location}
            description={center.description}
            imgUrl={center.imgUrl}
            reviewCount={center.reviewCount}
            rating={center.rating}
          />
        </li>
      ))}
    </ul>
  )
}
