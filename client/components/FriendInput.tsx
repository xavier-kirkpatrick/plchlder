function FriendInput() {
  return (
    <div className="flex flex-col gap-2 mt-2">
      <label htmlFor="friendName">
        Friend&apos;s name:
        <input
          className="border-2 rounded-md ml-2"
          id="friendName"
          name="friendName"
          type="text"
        />
      </label>
      <label htmlFor="instaUrl">
        Friend&apos;s Instagram url:
        <input
          className="border-2 rounded-md ml-2"
          id="instaUrl"
          name="instaUrl"
          type="text"
        />
      </label>
      <button className="border-2 rounded-md w-fit px-2">Submit</button>
    </div>
  )
}

export default FriendInput
