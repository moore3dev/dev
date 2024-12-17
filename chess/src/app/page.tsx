import Board from "../components/Board"
import Pawn from "../components/Pawn"

export default function page() {
  return <>
    <Board />
    <Pawn start="a 2" />
  </>
}