const Square = ({value, onCLick}) => {
    const style = value ?`squares ${value}` : "squares";

return (
    <button className={style} onClick={onClick}>
    {value }
 </button>
)
};
export default Square;