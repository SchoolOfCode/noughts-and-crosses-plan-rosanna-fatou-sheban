import Square from './Square'

const Board = ({squares, onSelectSquares  }) => (
<div className="board"> 
{squares.map ((square, index) => (
<Square
key={index}
value={square}
onCLick={()=> onSelectSquares(index)}
/>
))}
</div>
);

export default Board;