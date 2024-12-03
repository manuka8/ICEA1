import { useState } from 'react';
import '../assets/CSS/layout.css';
export default function Product({flowerType}){
    const [data,setData] = useState({
        quantity:'',
    })

    const [flowers,setFlowers]=useState([]);

    const handleChange=(e)=>{
        const {name,value} = e.target;
        setData({...data,[name]:value});
    }

    const handleQuantity=(e)=>{
        const {quantity} = data;
        setFlowers([...flowers,{quantity}])
    }
    return(
        <div className="grid-item">

            <div class="card">
                <img src={require(`../assets/image/${flowerType.img}`)} />
                <div class="card-body">
                    <h5 class="card-title">{flowerType.name} Price: {flowerType.price}</h5>
                    <div class="quantity-container">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" onChange={handleChange} />
                    </div>
                    <button class="card-button" onClick={handleQuantity}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}