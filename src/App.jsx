import bgDesktop from "./assets/images/pattern-bg-desktop.png";

function App() {
  return (
    <>
      <main
        className="w-screen h-screen bg-slate-400"
        style={{ backgroundImage: `url(${bgDesktop})` }}
      >
        <header className="min-h-[50%] w-full absolute top-0 z-20">
          <div className="h-full flex flex-col justify-center items-center gap-5 text-sm">
            <h2 className="text-2xl text-white font-bold pt-5">
              IP Address Tracker
            </h2>
            <div className="w-4/5 flex justify-center items-center relative">
              <input
                className="rounded-[16px] py-3 px-5 flex-grow-1 w-full"
                type="text"
                placeholder="Search for any IP address or domain"
              />
              <div className="rounded-r-[16px] h-full text-center px-5 absolute right-0 bg-black text-white flex justify-center items-center">
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </div>

            {/* Details */}
            <section className="w-4/5 h-full bg-white rounded-[16px] text-[9px] text-center font-bold flex justify-center">
              <div className="grid grid-rows-4 justify-center items-center gap-2 py-5">
                <div>
                  <p className="text-DarkGray">IP ADDRESS</p>
                  <h2>192.168.111.254</h2>
                </div>
                <div>
                  <p className="">LOCATION</p>
                  <h2>Bangkok</h2>
                </div>
                <div>
                  <p className="">TIMEZONE</p>
                  <h2>UTC-05:00</h2>
                </div>
                <div>
                  <p className="">ISP</p>
                  <h2>SpaceX Starlink</h2>
                </div>
              </div>
            </section>
          </div>
        </header>
        {/* Map */}
        <section className="absolute bottom-0 bg-gray-200 w-screen h-[65%] z-10 "></section>
      </main>
    </>
  );
}

export default App;
