import "./VendingMachine.css";
import { Link } from "react-router-dom";

function VendingMachine() {
  return (
    <div className="vendingDiv">
      <card className="card">
        <p>
          I am a Vending Machine!
          <br />
          Please make a selection:
        </p>
        <p>
          <Link to="/Chips">Chips</Link>
        </p>
        <p>
          <Link to="/Candy">Candy</Link>
        </p>
        <p>
          <Link to="/Soda">Soda</Link>
        </p>
      </card>
    </div>
  );
}

export default VendingMachine;
