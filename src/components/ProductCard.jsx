import { Link } from 'react-router-dom';

function ProductCard({ item }) {
  console.log("item=>", item);
  const { id, thumbnail, category, title, price } = item;

  return (
    <Link to={`/products/${id}`}>
      <div className="lg:w-full p-4 shadow">
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
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {title}
          </h2>
          <p className="mt-1">${price}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
