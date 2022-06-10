import { useDispatch } from "react-redux";
import { getData } from "../Redux/ShowData/action";

export const InputCom = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          dispatch(getData(e.target.value));
        }}
      />
    </div>
  );
};
