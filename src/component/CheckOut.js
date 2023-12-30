import { useParams } from "react-router-dom";
import { dataSet } from "./Main";
import { useContext } from "react";

function CheckOut() {
    const data = useContext(dataSet)
    const { productid } = useParams();
    const dataDetail = data[productid]
    console.log(dataDetail)
    return (
        <>
            <h6>{dataDetail.id}</h6>
            <img alt={dataDetail.title} src={dataDetail.thumbnail} />
            <p>{dataDetail.title}</p>
            <p>{dataDetail.description}</p>
            <h6>{dataDetail.stock}</h6>
            <h6>{dataDetail.price}</h6>
            <h6>{dataDetail.discountPercentage}</h6>
            <h6>{dataDetail.rating}</h6>
        </>

    );
}

export default CheckOut;