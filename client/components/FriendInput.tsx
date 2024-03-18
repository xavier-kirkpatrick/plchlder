function FriendInput() {
  return (
    <>
      <div className="text-xl mt-2">FriendInput</div>
      <label htmlFor="insta_url">
        Friend&apos;s Instagram url:
        <input
          className="border-2 ml-2 rounded-md p-2"
          id="insta_url"
          name="insta_url"
          type="text"
        />
        <button className="border-2 ml-2 rounded-md p-2">Submit</button>
      </label>
    </>
  )
}

export default FriendInput
