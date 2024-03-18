import Card from './Card'

function CardGallery() {
  return (
    <>
      <div className=" text-xl mt-2">CardGallery</div>
      <div className="flex flex-wrap gap-2">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  )
}

export default CardGallery
