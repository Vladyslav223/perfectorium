import React from "react";

import "./index.scss";

const Bottom = () => {
  return (
    <div  className="bottom">
        <form>
            <input type="checkbox"></input>
            <label>I agree to the <a href="http://google.com">Terms and Conditions</a></label>
            <button type="submit">DISPATCH</button>
        </form>
    </div>
  );
};

export default Bottom;