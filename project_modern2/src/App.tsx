import "./App.css";

import {
  Header,
  Footer,
  Home,
  Intro,
  Chef,
  FindUs,
  About,
  Gallery,
  Menu,
  Laurels,
} from "./scenes";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Menu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
}

export default App;
