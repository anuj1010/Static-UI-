import React from 'react';
import "./Card.css";

const Card = ({ heading, description, image }) => {
    return (
        <>

            <div id="container">

                <div class="product-details">

                    <h1>{heading}</h1>
                    <span class="hint-star star">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                    </span>

                    <p class="information">{description}</p>



                    <div class="control">

                        <button class="btn">
                            <span class="price">Get</span>
                            <span class="shopping-cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
                            <span class="buy">Details</span>
                        </button>

                    </div>

                </div>

                <div class="product-image">

                    <img src={image} />

                    <div class="info">
                        <h2> Description</h2>
                        <h3>Metaverse Projects</h3>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Card;