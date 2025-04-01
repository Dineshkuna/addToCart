import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductList = () => {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();

  // https://fakestoreapi.com/products
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then(res => setProduct(res.data))
      .catch(err => console.err("Error fetching products:", err));
  }, []);

  return (
    <div className="p-5 grid grid-cols-3 gap-4">
      {product.map ((item, index) => (
        <div className="border p-4 rounded-lg shadow" key={index}>
          {/* <p>{item.id}</p> */}
          <img className="w-full h-40 object-contain mb-2" src={item.image} alt={item.title} />
          <p className="text-lg font-semibold">{item.title}</p>
          <p className="text-left font-bold mt-2 ">Rating : {item.rating.rate} ⭐ </p>
          <p className="text-left mt-2 "> {item.description}</p>
          <p className="text-red-600 font-bold mt-2 ">Price : ${item.price}</p>
          <button className="mt-4 bg-blue-500 text-black px-4 py-2 rounded " onClick={()=> dispatch(addToCart(item))} >Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
