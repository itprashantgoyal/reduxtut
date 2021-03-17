import React from "react";

function Home () {
    return(
        <div>
            <div className="add-to-cart">
                <img src="https://cdn3.vectorstock.com/i/thumbs/62/87/flat-design-shopping-cart-vector-13576287.jpg" />
            </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.gizmochina.com/wp-content/uploads/2019/09/Apple-iPhone-11-1-500x500.jpg" />
                </div>
                <div className="txt-wrapper item">
                    <span>Iphone X</span>
                    <span>Price: $1000</span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home;