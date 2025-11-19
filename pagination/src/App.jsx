import axios from "axios";
import { useEffect, useState } from "react"

function App() {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(0);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');

      setProducts(response.data.products)
      setLimit(response.data.limit)
      console.log(response.data.products)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="w-full max-w-7xl bg-gray-50 rounded-lg p-6 h-full">
      {products ? products.map((product) => (
        <div key={product.id}>
          {product.title}
        </div>
      )) : (
        <div className="w-full text-center text-xl font-semibold">
          No Products Available
        </div>
      )}
    </div>
  )
}

export default App
