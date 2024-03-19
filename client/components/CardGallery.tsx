import Card from './Card'

function CardGallery() {
  const cardData: Card[] = [
    { id: 1, imgUrl: 'https://example.com', tags: ['tag1', 'tag2'] },
    { id: 2, imgUrl: 'https://example.com', tags: ['tag3', 'tag2'] },
    { id: 3, imgUrl: 'https://example.com', tags: ['tag2', 'tag4'] },
  ]

  return (
    <>
      <div className=" text-xl mt-2">CardGallery</div>
      <div className="flex flex-wrap gap-2">
        {cardData.map((card) => {
          return <Card key={card.id} card={card} />
        })}
      </div>
    </>
  )
}

export default CardGallery
