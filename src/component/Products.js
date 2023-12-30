import { useContext, useState } from "react"
import { dataSet } from "./Main";
import { ProductListCards } from "./ProductListCards";
import NavBar from "./NavBar";

function Products() {
    const data = useContext(dataSet);
    const [toAdd, setToAdd] = useState([]);

    let inCount = 1
    const handleToAdd = (data) => {
        const dataExtract = data
        console.log("stock", data.stock)
        const existingItem = toAdd.find((el) => el.id === data.id)
        if (existingItem) {
            setToAdd((preData) => preData.map(
                (item) => item.id === existingItem.id ? { ...item, count: item.count++ } : item
            ))
        } else {
            setToAdd((preData) => [...preData,{...dataExtract,count: inCount++}]);
        }
        console.log(toAdd);
    }

    const handleToNav = () => {
        console.log(toAdd)
    }

    console.log("toAdd", toAdd);
    return (
        <>
            <NavBar handleToNav={() => { handleToNav(toAdd) }} toAdd={toAdd} />
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