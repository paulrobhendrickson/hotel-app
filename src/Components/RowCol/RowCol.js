import React from "react";

function RowCol({ children }) {
  return (
    <div className="row">
      <div className="col">{children}</div>
    </div>
  );
}

export default RowCol;
