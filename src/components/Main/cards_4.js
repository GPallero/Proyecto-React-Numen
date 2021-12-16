import React from "react"

const Cards4 = ({titleS4, descriptionS4}) =>{
    return (
        <>
        <div className="cardS4">
            <h3 className= "card-title"> {titleS4} </h3>
            <p className= "card-text"> {descriptionS4} </p>
        </div>
        <style>{`
        .cardS4{
            height: 100%;
            color: black;
            margin: 20px;
            
        }
        .card-title {
            height: 24px;
            font-size: 25px;
            margin: 5px;
        }
        .card-text {
            magin-bottom: 5px;
        }
        `}
        </style>
        </>
        );
    }

export default Cards4;