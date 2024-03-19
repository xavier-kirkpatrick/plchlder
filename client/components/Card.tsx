interface Card {
  id: number
  imgUrl: string
  tags: string[]
}

interface Props {
  card: Card
}

function Card({ card }: Props) {
  return (
    <>
      <div className=" border-2 rounded-md p-5 my-2">
        <img className="h-72 w-44" src={card.imgUrl} />
        <div className="text-xl mt-2">{card.tags.join(', ')}</div>
      </div>
    </>
  )
}

export default Card
