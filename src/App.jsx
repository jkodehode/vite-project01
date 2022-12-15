import reactLogo from "./assets/react.svg";
import "./App.css";
import icon01 from "./assets/ic01.png";
import icon02 from "./assets/ic02.png";
import icon03 from "./assets/ic03.png";
import icon04 from "./assets/ic04.png";

// DATA
import { cardInfo } from "./data/data.js";

// Ekstra component
import Card from "./components/Card.jsx";

function handleClick(event) {
  console.log(event);
}

function App() {
  return (
    <div className="App">
      <button onClick={(party) => handleClick(party)}>Click ME!</button>
      <Header />

      <div className="navBarTop">
        <NavBar title="Nummer en">
          <p>Tittelen</p>
          <img className="iconImg" src={icon01} alt="" />
        </NavBar>
        <NavBar title="Nummer en" />
        <NavBar title="Nummer en" />
        <NavBar title="Nummer en" />
      </div>
      <MainContainer navn="navn" tall="19" />

      <ChildrenBox>
        <h3>Hei</h3>
        <h3>Hei</h3>
        <h3>Hei</h3>
        <h3>Heis</h3>
      </ChildrenBox>
    </div>
  );
}

function Header() {
  return (
    <div className="headerMain">
      <h1>BANNER</h1>
    </div>
  );
}

function NavBar(props) {
  const { title, children } = props;

  return (
    <div>
      <ul className="navBar">
        <li>
          <a href="#">
            {title}
            {children}
          </a>
        </li>
      </ul>
    </div>
  );
}

function MainContainer({ navn, tall }) {
  return (
    <div class="mainContainer">
      <div>
        <h1>HOVED</h1>
        <p>
          {navn} og {tall}
        </p>
      </div>
      <div className="skjermImg">
        {" "}
        {cardInfo.map((e, i) => {
          return <Card key={i} tittel={e.tittel} tekst={e.tekst} />;
        })}
      </div>
    </div>
  );
}

function ChildrenBox(props) {
  return <div className="childrenBox">{props.children}</div>;
}

export default App;
