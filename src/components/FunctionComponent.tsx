import React from 'react';


// // Declaring type of props - see "Typing Component Props" for more examples
// type AppProps = {
//     message: string;
//   }; /* use `interface` if exporting so that consumers can extend */
  
//   // Easiest way to declare a Function Component; return type is inferred.
//   const App = ({ message }: AppProps) => <div>{message}</div>;
  
//   // you can choose annotate the return type so an error is raised if you accidentally return some other type
//   const App = ({ message }: AppProps): JSX.Element => <div>{message}</div>;
  
//   // you can also inline the type declaration; eliminates naming the prop types, but looks repetitive
//   const App = ({ message }: { message: string }) => <div>{message}</div>;


const initialState = { count: 0 };

type ACTIONTYPE =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: string };

function reducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - Number(action.payload) };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement", payload: "5" })}>
        ADD
      </button>
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
        SUB
      </button>
    </>
  );
}
 
export default Counter;
