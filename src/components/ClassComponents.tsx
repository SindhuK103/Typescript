import React from 'react';

// class Component extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = { error: true};
        
//     }

//     render(){

//     }
// }


  type MyProps = {
    // can use  `interface` also
    message: string;
  };

  type MyState = {
    count: number; 
  };

  class ClassCom extends React.Component< MyProps,MyState > {
    state = { count: 3 };
    render() {
      return (
        <div onClick={() => this.increment(1)}>
          {this.props.message} {this.state.count}
        </div>
      );
    }
    increment = (amount: 1) => {
      // like this
      this.setState((state) => ({
        count: state.count + amount,
      }));
    };
  }

  // export default ClassComponent;

  // type MyProps = {
  //   // using `interface` is also ok
  //   message: string;
  // };
  // type MyState = {
  //   count: number; // like this
  // };
  // class ClassCom extends React.Component<MyProps, MyState> {
  //   state: MyState = {
  //     // optional second annotation for better type inference
  //     count: 0,
  //   };
  //   render() {
  //     return (
  //       <div>
  //         {this.props.message} {this.state.count}
  //       </div>
  //     );
  //   }
  // }

  export default ClassCom;