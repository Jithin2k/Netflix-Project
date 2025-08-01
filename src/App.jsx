import React from "react";
import { Provider } from "react-redux";
import Body from "./Components/Body";
import appStore from "./Utils/appStore";

const App = () => {
  return (
    <>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </>
  );
};

export default App;
