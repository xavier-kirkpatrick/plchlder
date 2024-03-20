import { ICard } from "../../models/card"
import Card from "./Card"

function CardGallery() {
  const cardData: ICard[] = [
    { id: 1, imgUrl: 'https://threadheads.com/cdn/shop/files/GreetingCards-085.jpg'},
    { id: 2, imgUrl: 'https://threadheads.com/cdn/shop/files/GreetingCards-089.jpg'},
    { id: 3, imgUrl: 'https://threadheads.com/cdn/shop/files/GreetingCards-097.jpg'},
  ]
  
  return (
    <>
      <div className=" text-xl mt-2">Card Gallery</div>
      <div className="flex flex-wrap gap-2">
        {cardData?.map((card) => {
          return <Card key={card.id} card={card} />
        })}
      </div>
    </>
  )
}

export default CardGallery
