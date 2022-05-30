import { useSelector, useDispatch } from 'react-redux';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App min-h-screen flex flex-col justify-center items-center bg-teal-500">
      <div>
        <h1 className="text-center text-xl font-bold mb-4">
          React Redux Counter
        </h1>
      </div>
      <div className="text-center">{counter}</div>
      <div className="flex justify-center items-center space-x-4 mt-4">
        <button
          className="px-4 py-2 bg-slate-400 rounded-md"
          onClick={() => {
            dispatch({ type: 'INC' });
          }}
        >
          +
        </button>
        <button
          className="px-4 py-2 bg-slate-400 rounded-md"
          onClick={() => {
            dispatch({ type: 'DEC' });
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default App;
