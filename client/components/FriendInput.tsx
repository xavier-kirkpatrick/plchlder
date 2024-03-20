import { useCards } from '../hooks'

function FriendInput() {
  // TODO: replace these with keywords from scraped data
  const keywords = ['dogs', 'nz', 'hiking', 'mountains']

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const friendName = event.currentTarget.friendName.value
    const instaUrl = event.currentTarget.instaUrl.value
    const occasion = event.currentTarget.occasion.value
  }

  return (
    <form className="flex flex-col gap-2 mt-2" onSubmit={handleSubmit}>
      <label htmlFor="friendName">
        Friend&apos;s name:
        <input
          className="border-2 rounded-md ml-2 px-1"
          id="friendName"
          name="friendName"
          type="text"
        />
      </label>
      <label htmlFor="instaUrl">
        Friend&apos;s Instagram url:
        <input
          className="border-2 rounded-md ml-2 px-1"
          id="instaUrl"
          name="instaUrl"
          type="text"
        />
      </label>
      <label htmlFor="occasion">
        Occasion:
        <input
          className="border-2 rounded-md ml-2 px-1"
          id="occasion"
          name="occasion"
          type="text"
        />
      </label>
      <button className="border-2 rounded-md w-fit px-2">Submit</button>
    </form>
  )
}

export default FriendInput
