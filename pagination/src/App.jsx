import axios from "axios";
import { useEffect, useState } from "react"
import ProductCard from "./component/ProductCard";
import Pagination from "./component/Pagination";
import { PAGE_SIZE } from "./constants";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(PAGE_SIZE);

  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / pageSize);
  const start = currentPage * pageSize;
  const end = start + pageSize;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data.products)
        console.log(response.data.products)
      } catch (error) {
        console.log(error)
        setError('Something wend wrong while loading products. Please try again later.')
      }
    }
    fetchData();
  }, []);


  return (
    <div className="w-full max-w-7xl mx-auto rounded-lg p-6 py-8 h-full">
      <div className="w-full flex justify-center items-center mb-6">
        <div className="mb-4 flex justify-start items-center">
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setCurrentPage(0);
            }}
            className="border border-[#D0D5DD] active:outline-0 focus:outline-0 focus:border-blue-500 rounded-lg p-2"
          >
            <option value={5}>5 per page</option>
            <option value={10}>10 per page</option>
            <option value={20}>20 per page</option>
            <option value={50}>50 per page</option>
          </select>
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
        {error ? (
          <div className="w-full text-center text-xl font-semibold">
            {error}
          </div>
        ) : products ? products.slice(start, end).map((product) => (
          <ProductCard key={product.id} product={product} />
        )) : (
          <div className="w-full text-center text-xl font-semibold">
            No Products Available
          </div>
        )}
      </div>
    </div>
  )
}

export default App
