
function ProductNotFound() {
    return (
        <div>
           <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
        <p className="text-lg">Sorry, the product you are looking for does not exist.</p>
        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded">Go Back</button>
      </div>
    </div>  
        </div>
    );
}

export default ProductNotFound;