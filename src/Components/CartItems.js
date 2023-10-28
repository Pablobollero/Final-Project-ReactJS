const CartItems = ({ count = 0}) => {
    return (
        <div className="position-absolute bg-dark rounded-circle  px-2" style={{top:0, right:0 }}>
        <span style={{ fontSize: "10px", color: "orange"}}>{count}</span>
        </div>
    );
};

export default CartItems;