import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import bgDesktop from "./assets/images/animateBG.jpg";
import Details from "./component/Details";
import MapCreator from "./component/MapCreator";
import Header from "./component/Header";
import apiRequests from "./apiService";
import inputValidator from "./inputValidator";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState({
    ip: "-",
    city: "-",
    region: "",
    postalCode: "-",
    timezone: "-",
    lat: 13.75633965669561,
    lng: 100.50183629941928,
    isp: "-",
    placeholder: null,
    id: uuidv4()
  });

  async function onSubmitHandle(event) {
    event.preventDefault();
    let respond = inputValidator(input);
    let { log, type, result } = respond
    if (result) {
      let apiRespond = await apiRequests(input, type)
      console.log(apiRespond);
      if (apiRespond.status === 200) {
        let { ip, location: { city, region, postalCode, timezone, lat, lng, }, isp, } = apiRespond.data;
        setOutput({
          ip, city, region, postalCode, timezone, lat, lng, isp, id: uuidv4()
        });
      } else {
        setInput("")
        setOutput(prevState => ({
          ...prevState,
          placeholder: apiRespond.message
        }));
      }
    } else {
      setInput("")
      setOutput(prevState => ({
        ...prevState,
        placeholder: log
      }));
    }
  }
  return (
    <>
      <main
        className="h-screen w-screen bg-slate-400 bg-left bg-cover"
        style={{ backgroundImage: `url(${bgDesktop})` }}
      >
        <section className="w-full h-full flex flex-col justify-center items-center">
          {/* Header */}
          <section className="h-[210px] flex-none  flex  flex-col items-center justify-start gap-5 text-sm  w-8/12 sm:w-10/12 lg:w-7/12">
            <Header
              value={input}
              setInput={setInput}
              onSubmitHandle={onSubmitHandle}
              placeholder={output.placeholder}
            />
          </section>

          {/* Details */}
          <section className="w-full h-full relative flex flex-col items-center ">
            <section className="h-[250px] sm:h-[110px] absolute sm:-top-[55px] -top-[70px] z-20  w-8/12 sm:w-10/12 lg:w-7/12">
              <Details {...output} />
            </section>
            <section className=" w-full h-full z-10">
              <MapCreator {...output} />
            </section>
          </section>

        </section >

        {/* Map */}
        {/* <section section className="absolute bottom-0 z-10 h-[60%] sm:h-[70%] = w-screen bg-gray-200 " >

        </section > */}
      </main>
    </>
  );
}
export default App;