import "./Container.css";
import Card from "../Card/Card";
import City from "../City/City";
import SelectCity from "../SelectCity/SelectCity";

function Container() {
  return (
    <div className="App">
      <div className="mainContainer">
        <div className="header">
          <City />
        </div>
        <div className="select">
          <SelectCity />
        </div>
        <div className="section">
          <Card />
        </div>
      </div>
      <div className="copyRight">
        <a
          href="https://github.com/Emin-Tura"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright &copy; Muhammed Emin Tura
        </a>
      </div>
    </div>
  );
}

export default Container;
