
const ProductCard = ({ product }) => {
    return (
        <div
            className="w-full bg-white rounded-2xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow duration-200"
        >
            <div className="space-y-5">
                <div className="h-40 w-full flex justify-center items-center rounded-xl overflow-hidden bg-gray-100">
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-40 h-full object-contain"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between w-full">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-1">
                            {product.title}
                        </h2>
                        <p className="text-sm text-gray-600 line-clamp-2">
                            {product.description}
                        </p>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        {/* Price */}
                        <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-gray-900">
                                ₹{product.price}
                            </span>

                            {product.discountPercentage && (
                                <span className="text-sm text-green-600 font-medium">
                                    {product.discountPercentage}% OFF
                                </span>
                            )}
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1">
                            <span className="text-yellow-500 text-lg">★</span>
                            <span className="text-gray-700 font-medium">{product.rating}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard