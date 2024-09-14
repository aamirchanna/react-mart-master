import React from "react";
import Banner from "./Banner";
import FeaturedProducts from "./FeaturedProduct";
import ReviewSection from "./Reviews";


function HomePage() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "This is a great product.",
      price: "$29.99",
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAC6AMIDASIAAhEBAxEB/8QAHAABAAEFAQEAAAAAAAAAAAAAAAUBAgQGBwMI/8QATBAAAQQBAgMEBQgECggHAAAAAQACAwQRBSEGEjETQVFhByJxgZEUIzJCcqGxwRVSc4IWM0NTYpKistHwFyQlNFVjwvFFg5OUw9LT/8QAHAEBAAIDAQEBAAAAAAAAAAAAAAMEBQYHAgEI/8QANREAAQMCAwQJAwQCAwAAAAAAAQACAwQRBSExBhITQRQiUWFxkaGxwYHR4RUjQlIWMiRT8f/aAAwDAQACEQMRAD8A62iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiiL2smtO+vXpyWpIw3tiJI4o43OHMGcz8knGCcDvHuxTrupuzyaZXb+0uPP3Mh/NSCN7sw0qF08bTZzgthRaw7WOIT9GHTGfaFmT8HNVjtS4id1s0Y/wBjTcfvkmP4L2KeY/x9lEayAfy91tSLmPEHFnEOj8/ZaiyR0cAmka6rXADnHDW9M77Z3Wz8I8VQ8R0wJ421tVgijfcq9A5rsATwZJJYe/fLTse4ugcC1267VW2ddnEbmFs6IiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiK172MHM9waPP8lhS3m7hha0frOIz7gq81RHCOsVG+RrNVmPkZGMvcB+J9gWFZ1OCtBYnex5ZDG6Q7gF2Bs0eZOAPasN1muSS+xFnvLpW/mVF6jZhsPp04ZI5A5/yqyY3BwEcJHI13L4uwf3VQiq5amdsUQtcqm+qcLkCwCRGQsMkuO2lc+ebHTtZCXOA8h0HsV/MMbqwkYIXmSSdv8FvzYwBYLW3yEkk6lehkGcD7kD27lx5WgFzie5rRklWeo0eJPio3WbIrabZIOJLJFWLfcc27j8PxSRwjYXdiRNdLIGDmufa/adqeowxnpZsOsyt/VgjyGtPuysivZtU7Ne5TlMNus8vgkaM4J2LXt72uGzh3j7oup/rFq/c6t5hVgP9BmMkfd8Vnrn9bM4y5HMe6/Q2zGGR/p7uK24kyt3DIetyuz8OcQ1NfpmRoEV2vysvVebJhkI2c0ncsduWH3dQQJxcFoX72l3K9+jIGWYMtw7JimicQXQzNHVjvuOCNwuy6JrdHXKTLdb1HtPZ2q7yDJWmxksfju72nvG/kL9NUCYd603G8FkwyW4zjOh+D3+6lURFaWvoiIiIiIiIiIiIiIiIioSB7uqxpbbW5EbS4+ODyqKWZkQu82Xhz2sF3LJLg0EuIAHUnZYklxoyIxn+k7p7gsV75ZDl5cfAY2HsCs379vasNPiLnZRZD1VKSqJyao6fR6FqV89l1qWV5y5z7U/wADgAPAYXmOH9C6GqXfammOT/AFlkX9U0zTYTNcsxxt35Wgh0jyO5jG7rm2v+kWxL2tfSmmCM5aZMgzuHm8bD3fFVIoppzkvMbZZOeS2rV38C6KyQ2qtZ87Wk9gwl8n75LsD/ADsvPRDFLA/UWVYqrbvK+KGFpa1kDRys675O5PtXIqot61qVKrJI97rVljDuThpOXO+GV22KJsUUUTGkMjY1jAB0a0YC2/BqARuMrjchVcSeIoxGDclXk+aoChLR1IHtc0fiVYZIR1lhHtljH5raLgarAWJV2T/3Wm8aah2TTCw/7tFyDfrYnG+3kPwW2SW6MLHSyWIOVgLiBIxxdj6rQ0kknp0XMNSmk1DVa8b/AFsPfes56ZcctH4fFYnE6hrY90Hx+i2DAqN89SABnkB4nJX1Ifk9aCI9WsBf9t3rO/wXuiqufPcXOLiv09Twtp4mxM0aAPJUUjourv0PUqt/tXsrmSOC+xg5hPWe7BaWZGXNzlm+x8iQY9R+ozdmI2jfs2unI8XfQjHxOfcpqYOMo3Vi8ffEzD5DKL5WHidPLVfQmmarpmsVWXNOsNngLnRuIBa6ORmzo5GO3Dh4Y8+hyc5cG4Z1O9wzLDZrB0kcjWDUqhdhtpuc8zc7CRuTyn3dCu3afqFHVKle9SlEtedvMxw2II2LHtO4cDsQs7FM2S+7yXIa7DaigLeMMnC4+3iOay0RFMsciIiIiIiIioqoiLmnFMHpC1PW9Rg0q1HBptNtRsDHTGEPdJA2RzzyjJOSRk+GPbAnhv0ouyXajUyeubkn/wBV1G8zs9Rgk+rbrOid+0ru52/EOd/VTlXNscx2soa10Ia22Vrjl5q/HExzQSuVHhT0lO636R9tlx/+NWO4O9Ih63dPP/n/AOMS6vyqhBWHG1db2N8vypeAxfPWus1uhbm0zUnME9ctLzFgtkD2h7XBwAyCCMbKGXRvSlQ7O7pGpNHq2az6shH85XdzAn2h39lc5XT8Lq+m0kc/aM/HQ+qoSt3XELKpxai+WN9GOw6ZjgGugY4lrjsN2hbGNK9IEmCflu+PpGQdf3VMaJV+RU6kZGJNpZfHnceY/Dp7lvYHTr0W3HCrMaXOsStW/Wt6V7WsBA0N1yz+D/Hbupse98g/6VcOFuNndXTj2Su/MhdRwrw3b7veVGcMZ/Y+i9jGJOTB6rkVzQ9foAG5ckhJjfM0PkkILGZyctcR3KJp25Ip3TuJke4cswcfWe3IOWnyW2cW23W7cleFwImmZQix3RRHMjvedz7VD3dMikaH1WiOWMANa3AEgaMAH+l5rAVL4o3cMnIre8Hoq2pjNZTjrMsbd/d4Dks+OSOVjZI3BzHDII/A+fir1rlS3LWlcCD1xPEds425mg/WC2COSOWNkkbg5jxlpH4HzWEqIDEb8l1LBsZjxGOxykGo+R3eyvCh3H5Xejb1YZDM79lD6rB7zlSk7zHDK4fSxyM+0/1QsHS4w42bHc9whiP/AC49sj2qSD9uN0n0Cp4uOmV0FANL77vAafPmpJTPDuv2eH7jpAHyadZcPl9Zu5B6fKIR05x3+I26gEQyqq0cjo3bzVn66ghr4TDMMj6d4Xe61mtbggs1pWS1542yRSRnLXtPQj817LlvAepX6+pt0puZKFxs8xYT/u0zGc5kZ5Oxhw8SD7epLYYZRK3eC4lieHyYdUGCTPsPaEREUyxqIiIiIiIij9Vb/qzJx1qTxWP3Aezk/sud8F5KSljZLHLE/dkrHxv+y4FpUPWLzBE1/wDGRgwyZ/XjJjd+C5pttS9aKpHe0+4+VepnXBC9lTCqi5yrS0/0haf8t4atytbmTT5obrdt+UHsn49zsn2Lj2iUnXtRrRcpcyM9vKACfUj3xt4nA96+iblaO5Uu05P4u1XmrP8AsysLM/eub8EaO6hW1CzM0CxPYkrDxbHXcWkD35+C6/sDPxo3U7s903+h/I9Vh8WcY4S9psTksqGhdlI5YnAE/Sf6oHnvutmDdgBvgAfDZXtwqgLscsxeufw0wiuQb3VnKVi6ja+R07VjoY4yI9usr/UZ18zn3LOx0Wq8Y3214IIebZjX3JWjy9SIH2nKo1EvDjLhqslSwcWZrPPwC0ppM+pTyE5ZSi7Bh8ZpMl5z8QsxYunxGKrGX57ScmxKT15pNx92FlrndXJvynuyX6Y2do+i0DARm7rH66ellgX9PbZHax4bYb0I2D8dx8/AqNp25qsj2Oaevz0J2JI+s3z8VsKwr1FtlvaMIZPGMtePrAb4d+SlgqBbhSaKji+DPEnT6A7sgzI7fz7rx1C0x8MfYPD+YEt5evaP9Rox4jcrPrxCCGGEfybA0+Z7ytdrTONmAT4LIZed3KB9UYBAG23VbO0tcA5pBBGQR0IXqqZw2tjboodm6jp9RNWykb5sLdg+x+EVUVegJ8ASqIat3OQW9+jyhmTU9Te3aMNpQHzdiWQ/3QuiKH4aofo3RdNruGJXRCxP49rN844H2ZA9ymFsNPHw4wFwnGazpldJMNL2HgMgiIinWIREREREREVFEPb2V27F3SdnaYPJ45Hfe0n3qYUJxC+enVfq8Pyc/o6CxJZjsPMTZa3KHuDXgH1gQOXbfJHesFj9A6vonRRi7hYjxH4U0Lw12a9kXNf9KtP/AIVJn9v3f1FUelWj36W//wBwf/zXL/8AGMU/6vUfdXuIztW86xcfQ065ZjGZwwRVW7etZmcIYhg/0iM+xRNSs2pWrVWnIgibGXd73Aes4+ZOT71qGpcfs1Fumyw6ZKYadx00kYk5+eYRERE+oCAMuI8x5K0ekAjrotjp3Od/gupbGUAwqme6pykcdNbAaaLXsXZNUOayIXA91vfL8VVaKPSEN86NZ6bYJzlP9Icf/BrXvJW89Nh/t6FYboFR/X1H3W99SBkDPee4eJXK+JLf6T1JsLT6lmxk+VWDYfHGVKT8fCaGaEafNX7SN7DM4OcGBwIJwFrFCeO3euWDkYiZFAw9RHn1iPh96xeI1bXR9Tktj2dwx0lW2OUW3iB9NT+FKewY8u4IiLSyv0aBYWCLxtvLK8mDh0mIme13Ur2Ubqcj3Oigj3ccMH7Sb1R8BlT0zN+QBYXHas0tC9zf9ndUeJWIyg+1XfZjJDuciuzAHzUfqgjzXpRvOhcYZgQMnI32/pNz94U1FGyGOKJvSNjWDHkMLEv6e2yDJEMTN32+sfH2q/xhIS1+hWtS4FNh8UdXQn9xo6w7e3/xZzQCAQcg7gjoVKaHQ/SOraXTLcxunEs+38jD84/Ptxj3rUtPvvgf8ms5G+AT3eY/MLq/o/oh79S1NwBaAylXcNwc4lkI/shRtpyJA06K7PtDHNhskzTZ4FrdhOX5W/qqIswuToiIiIiIiIiIiIsLVKUOo6dqFGZvNFZryRvbnHNtkDKzUXwi4svoyWjDgzgqVjHfoeuA5rXDlMreoz3OXhJ6PuCX5/2c5n7OzYH4uW0NaY3TxfzUz2tz+oTzt+4hXrhdTX19JO+HjOu0kf7HksrZpzstVq8BcK07EdiCKz6rgXxSzGWCVo+pLG8EELYY+H+Epdjoumh4G4+Tx7+zZZKo4EggOc0kEBzfpNJGMjzCvYbtNWU0oM7i9p1B+Co3xBwyyXmeFuEj10XTvdAwfgrTwnwgf/BaH/pY/NQnDfHFe9cm0LWSyrrNeaSqx5wyC86NxZlmdmvOPo9/d15Ru2V2Jr2uaHDQqgd4GxUDJwdwfIx7DpFRnOCOaEOje3za5hBBXKOLODLugz/Ka5fJRc/Ne00YfG49GTcuwd4dx7sH1R3Vec8EFmKWCxEyWGVhjljlaHMe09Q4HZfcijXlpvdfO1S722IpgG2B0xs2UDvb5+I/yMxTfGXA82l9pqGmtfLpoPO9oLnTUztu89S3wd3d/wCsdWq3SSIbJxINmyHYSd2Hdwd+P44qopbdZnkum4DtIJbU9Wc+Tu3uPf38/HXPAHf0GSfYN1F1QbOoyTEerAHSfvyeq0e4LOtyCGtO4nBI5B3Yz1XnpUJZV7V307LjMfJp2aF4gG5E5/bksjiH/MxOGl/jH1z48lnY2Vw6Y71UdwVdsqNbISsC9p8NljpcFskY5yW7OIbucd2fBdz4e07TtL0fTauntlFbsWztdYOZ5HTjtXPlP6xzv8O5cn0uk7UdQ0+iBkWbDGS43xC315D8Afiu2ABoAAAAAAA6ADoAsnSEkG+i5VtZDBFVN4Qs5wufj5VURFdWnoiIiIiIiIiIiIiIiKMtDkttO+J4f7cRwfuI+CtXvqTcRwTY/iJ2E+TJPm3fiD7l4Ljm1tLwcQMg0eAfg+yycJuwIiItRUq4h6RaBpcRzzsBay9FFbaRt65HI/B9oJ96nOE/SdJShbQ4i+UWIomhte7EBJYDR0ZO0kF3kc58c9Rn+lKh2tDS9QaN608laQ9/LK3nb97T8VyA9V3HZ+oFXh0bjqBbyy9lj5huvuvoGP0m8CO63bLPt05/+kFZbPSHwE/pq2PbUu/lEVyHhPiippTm0dVpVrOmveSHvrxSTV3OOScuaSW+I/7LslbTOD9RghsR6VpE8MzA+OSOrAWuaR1Ba1Zdx3DZfAwOFwqfw64DkaWu1mvyuBBEsNloIOxBD4wFzTiynwU9/wAu0DV9Pc2V/wA9REhaWOd9aDmGOXxB6d22zenu4N4Jl3OiURn+ba+P+44LwfwBwM/P+yuXP83auN/CReg668CzSuFPlfaNaiJufmlDNnB3JGdyC8dTgLZGhreVoA5WgADwA2C2Dif0eHT2P1HQWyyQxDnlrEl88IG/PE76Tm+I6jz+rqtS4Jj2cuBNsB4SDxHmqtQw2G7oFvey+IRNkeyZ3XfaxPdoFmeKDb3KvkmwBcc4A5ifADcqiuh3sFufAVLtbt/UHN9WpC2rEf8Amz4e8j2AAfvLoqgOEqJo6HRa9uJrQddn2weaf1gD7Byj3KfWZgbusAXEcWq+l1kkvK+XgMgiIimWLREREREREREREREREXlYiE8M8J/lY3sye4kbFa/DqumEdnLcrR2YyY54pZWMkZIw8rg5riD1WyqB1bhTh7WHvms1Q2y8YdPCeSR32sbFa/jWCR4q1u87dLflWIZdzIq9lmpJ9CxA/wCzKw/gV7Dfpv7N1o970bvjLn0bLnDfDXbOHwWvz8NcQUieWWw0D9V8jf7pWqP2J/rN5t/Ksccdi33iqj+kOH9arhuXis6xFt9eD50Y9uCPevnktOQAD4bLfnx8TMZJE67fLHtcx7flM/K5hGC0guUWzRZGOc7szl3j3LacCwqXC4nRPeHAm4soJXh+i1ttZ+Muyto4X4m1Th6URgOm097vna7ifVz9eI9xWRFosjgMs+5Z8XDznY9T7lnHubaxXxjHA3C6lpWt6fqVeOxVmDmOAyDs5h/VcPFTDJWuxuuU0NE1SjIJqUxif9YdWO+01bDDqPFMOBLBUkxjcdo3I9yqb+6clOYw7Vb1kFc+4v4Fju9tqeisbHcBMs9VnqsnPUvh7g/y6HyP0pVnEWpx7S6YD5xzEf3mrLj4niOO1oWm/ZMbsfeF7Ezeag4bmG4XHatp5ea1oFk7HFmZBykubsWuB+spjT6Zv39PpY2sWGNl8oWfOSH4DHvWycU6XpGvsfdoVrMOrtx0jY2O1uBiU82MjuP+RdwToGsUp57uqsY17Yfk9NnM17wHHL3vLdt8ABQuY0neaVtsG0Uoo3wS5utYH7/TmuhxANa0AYAAAA6ADYBeitaMAK5X4hZua0sm5RERSr4iIiIiIiIiIiIiIiIiIiIqKySKKUYewEY7wvRF8sl7KKn0ShNkhgB9ij38OwgnDRj2LZUXgsHJSCQjVay3RImn6A+CyWaXE36o+CnMDyTA8lGYb81JxyOSjGUmNGzfuXoajCN2j4LPwFVeejhOO5RTqLD9UfBeLtNjP1FNJgeS8mlBTjnmoiLTmtP0VJRQtYOi9VVe2U7W5rw6QuVFVEVlRIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiL//2Q==",
    },
    {
      id: 2,
      name: "Product 2",
      description: "This product is amazing.",
      price: "$39.99",
      image: "https://th.bing.com/th?id=OIP.yuIhGQGVmD9pCQd22TKOWAHaHd&w=249&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    },
    {
      id: 3,
      name: "Product 3",
      description: "You will love this product.",
      price: "$49.99",
      image: "https://th.bing.com/th/id/OIP.wMftsrP6USIHg4aMEpwnPQHaHa?w=148&h=180&c=7&r=0&o=5&pid=1.7",
    },
  ];

  return (
    <div>
    <Banner />
     
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-48  object-contain" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">{product.price}</span>
                <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    
    </div>
    
    <FeaturedProducts/>
    <ReviewSection/> 
    </div>
  );
}

export default HomePage