import React from "react";
import { useSelector } from "react-redux";

export const ShowCom = () => {
  const { data } = useSelector((store) => store.InputData);

  return (
    <div>
      <h3>{data}</h3>
    </div>
  );
};
