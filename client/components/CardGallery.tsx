import { useCards } from "../hooks"
import Card from "./Card"

function CardGallery() {

  const cards = useCards()

  return (
    <>
      <div className=" text-xl mt-2">Card Gallery</div>
      <div>Hope you enjoy your cards</div>
      <div className="flex flex-wrap gap-2">
        {cards.data?.map((card) => {
          return <Card key={card.id} card={card} />
        })}
      </div>
    </>
  )
}

export default CardGallery
