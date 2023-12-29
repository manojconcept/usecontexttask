import { useContext } from "react"
import { dataSet } from "./Main";
import { ProductListCards } from "./ProductListCards";

function Products() {
    
    const data = useContext(dataSet);
    const dataMin = data.products;
    console.log(dataMin);
    const dataSp = [...dataMin]
    console.log(dataSp);

    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center">
                    {dataSp.map((data, index) => {
                        return <ProductListCards index={index} data={data} />
                    })}
                </div>
            </div>
        </section>

    );
}

export default Products