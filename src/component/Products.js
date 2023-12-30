import { useContext, useState } from "react"
import { dataSet } from "./Main";
import { ProductListCards } from "./ProductListCards";
import NavBar from "./NavBar";

function Products() {
    const data = useContext(dataSet);
    const [cart, setCart] = useState([]);

    const handleToAdd = (data) => {
        const dataExtract = data;
        const existingItem = cart.find((el) => el.id === data.id);
        console.log("existingItem",existingItem)

        if (existingItem) {
            setCart((preData) => preData.map(
                (item) => item.id === existingItem.id ? { ...item, count: item.count++ } : item
            ))
        } else {
            setCart((preData) => [...preData,{...dataExtract,count: 1}]);
        }
        console.log(cart);

    }

    const handleToNav = () => {
        console.log(cart)
    }

    console.log("toAdd", cart);
    return (
        <>
            <NavBar handleToNav={() => { handleToNav(cart) }} toAdd={cart} />
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center">
                        {data.map((data, index) => {
                            return <ProductListCards handleToAdd={() => { handleToAdd(data) }} key={index} index={index} data={data} />
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Products