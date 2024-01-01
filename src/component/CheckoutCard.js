import React from 'react';

function CheckoutCard({ value, index, cart, setCart }) {
    console.log(value.id);
    console.log(value);
    console.log(value.stock);

    let stock = [];
    for (let i = 1; i <= value.stock; i++) {
        stock.push(i); 
    }
    console.log(stock);

    const handleCal = (e) => {
        const valueDisplay = e.target.value;
        console.log(valueDisplay);
        console.log(value);
        console.log(`cart : ${cart}`);
        console.log(cart);
        setCart((preData) => preData.map((product)=>{
            if(product.id === value.id){
                return {...product,count:parseInt(valueDisplay)};
            }
            return product
        })
        )
    };
    console.log(cart);

    return (
        <div key={index} className="card w-75 m-4">
            <div className="card-body">
                <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>{value.brand}</div>
                <div className="badge bg-light text-dark position-absolute" style={{ top: "0.5rem", right: "5rem" }}>{` category : ${value.category}`}</div>
                <div><h5 className="card-title">{value.title}</h5></div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                        <p className="card-text">{value.description}</p>
                    </div>
                    <div>
                        <label htmlFor={`quantityDropdown-${index}`}>Quantity:</label>
                        <select id={`quantityDropdown-${index}`} value={value.count} onChange={handleCal}>
                            {stock.map((data, index) => (
                                <Option key={index} data={data} />
                            ))}
                        </select>
                    </div>
                    <div>
                        {`$ ${value.price}`}
                    </div>
                </div>
            </div>
        </div>
    );
}

function Option({ data }) {
    return <option value={data}>{data}</option>;
}

export default CheckoutCard;
