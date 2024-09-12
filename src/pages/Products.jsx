import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import AlphabetChip from "../components/AlphabetChip"; // Updated to AlphabetChip

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [chosenLetter, setChosenLetter] = useState("All");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
        setFilteredProducts(res.data.products);
        setLoadingProducts(false);
      })
      .catch((err) => {
        console.log(err);
        setLoadingProducts(false);
      });
  }, []);

  useEffect(() => {
    if (chosenLetter === "All") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.title.toUpperCase().startsWith(chosenLetter)
      );
      setFilteredProducts(filtered);
    }
  }, [chosenLetter, products]);

  return (
    <div className="container mx-auto">
      {loadingProducts ? (
        <h1 className="text-center text-3xl">Loading...</h1>
      ) : (
        <div>
          {/* Alphabet Filter */}
          <div className="flex gap-3 flex-wrap mb-4">
            <AlphabetChip
              isChosen={chosenLetter === "All"}
              key="all"
              category={{ slug: "All", name: "All" }}
              onClick={() => setChosenLetter("All")}
            />
            {alphabet.map((letter) => (
              <AlphabetChip
                key={letter}
                isChosen={chosenLetter === letter}
                category={{ slug: letter, name: letter }}
                onClick={() => setChosenLetter(letter)}
              />
            ))}
          </div>

          {/* Display Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredProducts.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
