import OptimeHead from "@/src/OptimeHead";
import Preloader from "@/src/layout/Preloader";
import "@/styles/globals.css";
import { Fragment, useState } from "react";
const App = ({ Component, pageProps }) => {
  const [loding, setLoding] = useState(true);
  setTimeout(() => {
    setLoding(false);
  }, 1500);

  return (
    <Fragment>
      <OptimeHead />
      <Preloader />
      {!loding && <Component {...pageProps} />}
    </Fragment>
  );
};
export default App;
