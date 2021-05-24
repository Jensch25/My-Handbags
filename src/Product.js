import React from "react";

function Product(props) {
    return (

            <article>
                <span> {props.span} </span>
                <img src={props.image} alt={""}/>
                <p>{props.title}</p>
                <h4>€{props.price},-</h4>
            </article>


    );
}

export default Product;
