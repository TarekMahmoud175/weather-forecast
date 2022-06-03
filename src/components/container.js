import React from "react";

const containerStyle = {
  width: "61.094vw",
  maxWidth: 900,
  marginInline: "auto",
};

const Container = ({ children, style, className = "" }) => {
  return (
    <div style={{ ...containerStyle, ...style }} className={className}>
      {children}
    </div>
  );
};

export default Container;
