import { Component, ReactNode } from "react";
import { Ring, Color } from "./App";

type Location = "b" | "t"
type coords = [number, number] | number

type RingProps = {
  // onclick from board or tray
  ind : coords // i,j if board, i if tray
  loc : Location
};


type RingState = {
  
};


// One ring tile
export class RingTile extends Component<RingProps, RingState> { 
  // onclick that is passed in
  constructor(props: RingProps) {
    super(props)
  }

  render = (): React.JSX.Element => {
    return <div>
        <div>
          {this.props.loc} {this.props.ind}
        </div>
      </div>
  }
}

export const randomRing = (): Ring => {
  const numRings = randInt(2)
  const colors: Ring = []
  const ring = randInt(3)
  if (numRings > 1) {
    let ring2 = randInt(3)
    while (ring2 === ring) {
      ring2 = randInt(3)
    }
    for (let index = 0; index < 3; index++) { 
      if (index === ring2 || index === ring) {
        colors.push(getColor())
      } else {
        colors.push(null)
      }
    }
  } else {
    for (let index = 0; index < 3; index++) { 
      if (index === ring) {
        colors.push(getColor())
      } else {
        colors.push(null)
      }
    }
  }
  return colors
}

const randInt = (max: number): number => {
  return Math.floor(Math.random() * max)
}

const getColor = (): Color => {
  const num = randInt(5)
  switch(num){
    case(0): return "red"
    case(1): return "blue"
    case(2): return "green"
    case(3): return "purple"
    default: return "yellow"
  }
}