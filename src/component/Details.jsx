function Details({ ip, city, region, postalCode, timezone, isp }) {
  return (
    <>
      <div className="px-3 grid grid-rows-4 sm:grid-rows-1 md:grid-cols-4 items-center justify-items-left gap-2 py-5 rounded-[16px] bg-white text-center md:text-left text-[9px] font-bold w-full">
        <div className="md:pl-2 h-full ">
          <p>IP ADDRESS</p>
          <h2>{ip}</h2>
        </div>
        <div className="md:pl-5 h-full md:border-l-[1px]">
          <p>LOCATION</p>
          <h2>{city === '-' ? city : `${city}, ${region} ${postalCode}`}</h2>
        </div>
        <div className="md:pl-5 h-full md:border-l-[1px]">
          <p>TIMEZONE</p>
          <h2>{timezone != "-" && "UTC"}{timezone}</h2>
        </div>
        <div className="md:pl-5 h-full md:border-l-[1px]">
          <p>ISP</p>
          <h2>{isp}</h2>
        </div>
      </div>
    </>
  );
}

export default Details;
