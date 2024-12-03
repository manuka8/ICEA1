import '../assets/CSS/layout.css';
export default function Product(){
    const [quantity, setQuantity] = useState(0);

    const handleAddToCart = () => {
        if (quantity > 0) {
            addToCart(flower, quantity);
            setQuantity(0); 
        }
    };

    const handleQuantityChange = (e) => {
        const value = Math.max(0, Number(e.target.value)); 
        setQuantity(value);
    };
    return(
        <div className="grid-item">
            <div className="card">
            <img src={require(`../assets/image/${flower.img}`)} />
                <div className="card-body">
                    <h5 className="card-title">Price: {flower.price}</h5>
                    <div className="quantity-container">
                        <label htmlFor="quantity">Quantity:</label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            value={quantity}
                            onChange={handleQuantityChange}
                        />
                    </div>
                    <button className="card-button" onClick={handleAddToCart}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}