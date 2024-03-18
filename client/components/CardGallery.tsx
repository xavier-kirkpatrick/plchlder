import Card from './Card'

function CardGallery() {
  return (
    <>
      <h2>CardGallery</h2>
      <p>Placeholder content</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  )
}

export default CardGallery
