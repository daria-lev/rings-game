import React, { Component, ChangeEvent, MouseEvent } from "react";
import { Ring } from "./App";


type BoardProps = {
  
};


type BoardState = {
  rings: Ring[][]
};


// Stores rings that have been placed
export class Board extends Component<BoardProps, BoardState> {

  constructor(props: BoardProps) {
    super(props);
    //console.log("i am in the constructor")
    this.state = { rings: Array(5).fill(Array(5).fill(null)) }; // ??
  }

  render = (): React.JSX.Element => { 
    return <div>Board Under Construction</div>
  }

  // onclick sets cl
}