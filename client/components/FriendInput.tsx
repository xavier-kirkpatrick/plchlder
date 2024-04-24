import { useCards, useScraper } from '../hooks/hooks'

function Keywords() {
  const scraper = useScraper('pooleypoo')

  return (
    <>
      {scraper.isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="text-2xl">Keywords</div>
          <div>{JSON.stringify(scraper.data?.keywords || 'Error')}</div>
          <div className="text-2xl">Description</div>
          <div>{JSON.stringify(scraper.data?.description || 'Error')}</div>
        </>
      )}
    </>
  )
}

function FriendInput() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const friendName = event.currentTarget.friendName.value
    const instaUrl = event.currentTarget.instaUrl.value
    const occasion = event.currentTarget.occasion.value
  }

  return (
    <>
      <form className="flex flex-col gap-2 mt-2" onSubmit={handleSubmit}>
        <label htmlFor="friendName">
          Friend&apos;s name:
          <br />
          <input
            className="border-2 rounded-md ml-2 px-1"
            id="friendName"
            name="friendName"
            type="text"
          />
        </label>
        <label htmlFor="instaUrl">
          Friend&apos;s Instagram url:
          <br />
          <input
            className="border-2 rounded-md ml-2 px-1"
            id="instaUrl"
            name="instaUrl"
            type="text"
          />
        </label>
        <label htmlFor="occasion">
          Occasion:
          <br />
          <input
            className="border-2 rounded-md ml-2 px-1"
            id="occasion"
            name="occasion"
            type="text"
            defaultValue={'birthday'}
          />
        </label>
        <button className="border-2 rounded-md w-fit px-2">Submit</button>
      </form>
      <Keywords />
    </>
  )
}

export default FriendInput
