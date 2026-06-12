import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type == "buy") return { money: state.money - 10 };
  if (action.type == "sell") return { money: state.money + 10 };
  return state;
};

export default function App() {
  const initialState = { money: 10 };
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div className="m-10">
      <p>Wallet: {state.money}</p>
      <button className="bg-amber-600 px-2 py-0.5 text-white m-1 rounded-sm" onClick={() => dispatch({ type: "buy" })}>Buy</button>
      <button className="bg-amber-600 px-2 py-0.5 text-white m-1 rounded-sm" onClick={() => dispatch({ type: "sell" })}>Sell</button>
    </div>
  );
}
