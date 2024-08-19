import { useEffect, useState } from "react";

export default function Home() {
    const [products, setProducts] = useState([]);
    const [bestProducts,  setBestProducts] = useState([]);

    useEffect(() => {
        const FetchData = async () => {
            try {
                const response = await fetch(
                    "http://127.0.0.1:8000/api/products"
                );
                const result = await response.json();
                console.log("Fetched data:", result);
                // Ensure that result.products exists and is an array
                if (result.products && Array.isArray(result.products)) {
                    setProducts(result.products);
                    // Select three specific products by their IDs or any other criteria
                    const specificProducts = result.products.filter(
                        (product) => [1, 2, 3].includes(product.id) // Assuming you want to display products with IDs 1, 2, and 3
                    );
                    setBestProducts(specificProducts);
                } else {
                    console.error("Unexpected data structure:", result);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        FetchData();
    }, []);

    return (
        <>
            <h1 className="text-center mt-5 text-3xl">Best Products</h1>
            <section className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {bestProducts.length > 0 ? (
                    bestProducts.map((category) => (
                        <div
                            key={category.id}
                            className=" card-product flex flex-col  mx-auto  max-w-xs  rounded-lg border border-gray-100 bg-white shadow-md"
                        >
                            <a
                                className="relative mx-3 mt-3 flex h-60 rounded-xl"
                                href="#"
                            >
                                <img
                                    className="object-cover"
                                    src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                    alt="product image"
                                />
                                <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                                    39% OFF
                                </span>
                            </a>
                            <div className="mt-4 px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl tracking-tight text-slate-900">
                                        {category.name}
                                    </h5>
                                </a>
                                <div className="mt-2 mb-5 flex items-center justify-between">
                                    <p>
                                        <span className="text-3xl font-bold text-slate-900">
                                            ${category.price}
                                        </span>
                                        <span className="text-sm text-slate-900 line-through">
                                            $699
                                        </span>
                                    </p>
                                    <div className="flex items-center">
                                        {/* Ratings (Example for 5-star rating) */}
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                aria-hidden="true"
                                                className="h-5 w-5 text-yellow-300"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                        ))}
                                        <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                                            5.0
                                        </span>
                                    </div>
                                </div>
                                <a
                                    href="#"
                                    className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="mr-2 h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                    Add to cart
                                </a>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No products found</p>
                )}
            </section>
            <h1 className=" text-center text-3xl mt-6">Categories</h1>

        </>
    );
}
