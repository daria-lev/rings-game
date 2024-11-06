import React, { Component, ChangeEvent, MouseEvent } from "react";
import { Ring } from "./App";

type TrayProps = {
  
};


type TrayState = {
  rings: Ring[][]
};


// Stores rings that have been placed
export class Tray extends Component<TrayProps, TrayState> {

  constructor(props: TrayProps) {
    super(props);
    //console.log("i am in the constructor")
    this.state = { rings: Array(3).fill(null) }; // ??
  }

  render = (): JSX.Element => { 
    return <div>Tray Under Construction</div>
  }
}