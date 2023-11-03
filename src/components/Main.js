import "./../App.css";
import CallToAction from "./CallToAction";
import Specials from "./Specials";
import CustomersSay from "./CustomersSay";
import About from "./About";

export default function Main() {
  return (
    <main className="container">
      <CallToAction />
      <Specials />
      <CustomersSay />
      <About />
    </main>
  );
}
