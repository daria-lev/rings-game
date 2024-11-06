import React, {Component} from 'react';
import './App.css';
import { Board } from './Board';
import { Tray } from './Tray';

export type Color = "red" | "blue" | "green" | "purple" | "yellow" | null;
export type Ring = Color[] | null;

type AppState = {
  curRing?: Ring;
};



export class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = {};
  }

  render = (): JSX.Element => {
    return <div>
      <Board/>
      <Tray/>
    </div>;
  }
}
