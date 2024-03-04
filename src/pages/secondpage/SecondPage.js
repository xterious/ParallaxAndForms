import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const SecondPage = () => {
  const [counterState, setCounterState] = useState(false);
  return (
    <>
      <h1>Okay</h1>
      <div>Counters will appear here</div>
      <ScrollTrigger
        onEnter={() => setCounterState(true)}
        onExit={() => setCounterState(false)}
      >
        <div className="grid grid-cols-4 px-20 py-12 text-center text-2xl font-bold">
          <div>
            <h2 className="text-6xl">
              {counterState && (
                <CountUp start={0} end={95} duration={2.7}></CountUp>
              )}
              {!counterState && <>95</>}%
            </h2>
            <p>Waaone</p>
          </div>
          <div>
            <h2 className="text-6xl">
              {counterState && (
                <CountUp start={0} end={55} duration={1.7}></CountUp>
              )}
              {!counterState && <>55</>}%
            </h2>
            <p>Wagone</p>
          </div>
          <div>
            <h2 className="text-6xl">
              {counterState && (
                <CountUp start={0} end={25} duration={0.7}></CountUp>
              )}
              {!counterState && <>25</>}%
            </h2>
            <p>WaPne</p>
          </div>
          <div>
            <h2 className="text-6xl">
              {counterState && (
                <CountUp start={0} end={65} duration={3.7}></CountUp>
              )}
              {!counterState && <>65</>}%
            </h2>
            <p>Wtwoe</p>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
};

export default SecondPage;
