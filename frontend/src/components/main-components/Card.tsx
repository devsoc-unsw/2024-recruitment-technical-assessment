import { CardT } from "../../types"
import Chip from "./card-components/Chip"
import FilledStar from "./card-components/FilledStar"
import Star from "./card-components/Star"

const Card = ({
  course_prefix,
  course_code,
  course_title,
  average_stars,
  total_reviews,
  offered_terms
}: CardT) => {
  const filledStars = Math.round(Number(average_stars))


  return (
    <div className="p-5 shadow-md rounded-md">
      <section className="md:flex md:justify-between">
        <p className="font-extrabold text-2xl">{course_prefix}{course_code}</p>
        <div >
          <div className="flex">
            {Array(filledStars).fill(0).map((v, i) => <FilledStar key={i} />)}
            {Array(5 - filledStars).fill(0).map((v, i) => <Star key={i} />)}

          </div>
          <p className="text-gray-500 text-sm">{total_reviews} reviews</p>
        </div>
      </section>
      <p>{course_title}</p>
      {/*another map for each offered term*/}
      <div className="flex md:flex-row flex-col gap-1 mt-10 p-2">
        {offered_terms.map((v, i) => <Chip key={i} termName={v} />)}

      </div>
    </div>
  )
}

export default Card
