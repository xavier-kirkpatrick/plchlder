interface Card {
  id: number
  imgUrl: string
}

interface Props {
  card: Card
}

function Card({ card }: Props) {
  return (
    <>
      <div className=" border-2 rounded-md p-5 my-2">
        <img className=" h-60 aspect-w-8 aspect-h-10" src={card.imgUrl} />
      </div>
    </>
  )
}

export default Card
