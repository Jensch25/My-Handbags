import React from "react";

function Tile(props) {
    return (

        <section>
            <h2> {props.title} </h2>
            <p> {props.text} </p>
            <p> {props.text1} </p>
            <img src={props.image} alt={""}/>
        </section>

    );
}

export default Tile;