import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./features/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-80 text-center">
        <h1 className="text-3xl font-bold text-indigo-600 mb-4">
          Redux Counter
        </h1>
        <h2 className="text-5xl font-extrabold mb-6 text-gray-800">{count}</h2>
        <div className="flex justify-center gap-6">
          <button
            onClick={() => dispatch(decrement())}
            className="bg-red-500 text-white font-semibold px-5 py-2 rounded-lg hover:bg-red-600 transition"
          >
            −
          </button>
          <button
            onClick={() => dispatch(increment())}
            className="bg-green-500 text-white font-semibold px-5 py-2 rounded-lg hover:bg-green-600 transition"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
