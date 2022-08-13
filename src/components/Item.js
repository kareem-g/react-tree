import React from "react";

const Item = () => {
  const styles = {
    display: "inline-flex",
    margin: ".5rem",
  };
  return (
    <>
      <div style={styles}>
        <div style={{ marginRight: "4px" }}>(حسابات دائنة)</div>
        <div
          style={{
            marginRight: "8px",
            color: "gray",
          }}
        >
          دائن
        </div>
      </div>
    </>
  );
};

export default Item;
