import { useState, createContext, useContext } from "react";

const CounterContext = createContext(null);

export default function CounterUseStatePage() {
    // The function has STATE
    // Context.Provider has CONTEXT
  return (
    <>
    <div className="text-white">
        <CounterContext.Provider value={useState("Active")}> 
            <ChangeActivityButton />
            <Counter />
        </CounterContext.Provider>
    </div>
    </>
  );
}

const ChangeActivityButton = () => {
    const [activityContext , setActivityContext] = useContext(CounterContext);

    return (
        <div>
      <button className="text-mainPink" onClick={console.log(activityContext)}>CONSOLE COUNTER</button><br/>
      <button onClick={() => setActivityContext((activityContext) => {
        return activityContext === "Active" ? "Inactive" : "Active";
      })}>
        setActivityContext()
        </button>
    </div>
  );
};

const Counter = () => {
    const [activityContext] = useContext(CounterContext);
    return <div>{activityContext}</div>;
};
