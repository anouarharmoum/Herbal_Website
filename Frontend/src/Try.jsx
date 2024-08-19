import { useEffect, useState } from "react";

export default function Try() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const FetchData = async () => {     
            // try {
                const response = await fetch("http://127.0.0.1:8000/api/categories");
                const result = await response.json();
                console.log("Fetched data:", result); 
                const { categories } = result;
                setCategories(categories);
                // Destructure the products array from the result
            //     const { products } = result;

            //     // Ensure products is an array
            //     if (Array.isArray(products)) {
            //         setProducts(products);
            //     } else {
            //         console.error("Fetched data is not an array:", products);
            //     }
            // } catch (err) {
            //     console.error("Error fetching data:", err);
            // }
        }
        FetchData();
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th className="w-4">id</th>
                        <th  className="w-4">picture</th>
                        <th className="w-4">name</th>
                        {/* <th className="w-4">Description</th>
                        <th className="w-4">price</th> */}
                    </tr>
                </thead>
                <tbody>
                    {categories.map((categori) => (
                        <tr key={categori.id}>
                            <td className="w-4 ">{categori.id}</td>
                            <td className="w-4 "><img src={categori.picture} alt="" /></td>
                            <td className="w-4 ">{categori.name}</td>
                            {/* <td className="w-4 ">{product.description}</td>
                            <td className="w-4 ">{product.price}</td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
