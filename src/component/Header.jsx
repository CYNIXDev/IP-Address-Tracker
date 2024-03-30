function Header({ value, setInput, onSubmitHandle, placeholder }) {
  function onChangeHandle(event) {
    setInput(event.target.value);
  }
  return (
    <>
      <h2 className="pt-5 text-2xl font-bold text-white">IP Address Tracker</h2>
      <form
        onSubmit={onSubmitHandle}
        className="relative w-full items-center justify-center"
      >
        <input
          onChange={onChangeHandle}
          className="text-[9px] sm:text-base w-full rounded-[16px] px-5 py-3 focus:outline-none "
          type="text"
          placeholder={placeholder ? placeholder : "Search for any IP address or domain"}
          value={value}
        />
        <button
          type="submit"
          className="absolute -right-1 top-0 flex h-full cursor-pointer items-center justify-center rounded-r-[15px] bg-black px-5 text-center hover:bg-gray-800 active:hover:bg-black text-white focus:outline-none"
        >
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </form>
    </>
  );
}

export default Header;
