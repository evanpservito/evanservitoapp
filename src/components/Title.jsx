import React from "react";

const Title = ({ children, id }) => {
  return (
    <h1
      id={id && id}
      className="text-2xl font-bold underline underline-offset-8 decoration-4 mb-10 text-stone-900"
    >
      {children}
    </h1>
  );
};

export default Title;
