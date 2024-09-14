import { Link } from 'react-router-dom';
function ProductCard({ item }) {
  console.log("item=>", item);
  const { id, thumbnail, category, title, price } = item;

  return (
    <Link to={`/products/${id}`}>
      <div className=" p-4 shadow-lg m-2 border-gray-800">
        <a className="block relative h-64 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={thumbnail}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            {category}
          </h3>
          <h2 className="text-2xl font-bold mb-6">
            {title}
          </h2>
          <div className='flex justify-between items-center'>
          <button className="bg-indigo-500 flex text-white px-4 py-2 rounded hover:bg-indigo-600">
                  Add to Cart </button>
          <p className="mt-1 font-bold ">${price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
