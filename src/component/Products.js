import { useContext } from "react"
import { dataSet } from "./Main";
import { ProductListCards } from "./ProductListCards";
import { useNavigate } from "react-router-dom"

function Products() {
    const toSinglePage = useNavigate();
    const main = useContext(dataSet);
    console.log(main.cart)
    const mainProducts = main.realData;

    const handleSingleProduct = (data) => {
        console.log(data.id)
        toSinglePage(`add/${data.id}`)
    }

    console.log("toAdd", main.cart);
    return (
        <>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center">
                        {mainProducts.map((data, index) => {
                            return <ProductListCards handleSingleProduct={() => { handleSingleProduct(data) }} handleToAdd={() => { main.handleAddProducts(data, main.cart, main.setCart) }} key={index} index={index} data={data} />
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Products