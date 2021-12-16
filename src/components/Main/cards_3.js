import React from "react";

const Cards3 = ({imageS3, titleS3, descriptionS3}) =>{
    return (
      <>
        <div className="cardS3" >
            <img className="img_card3" src={imageS3} alt=""/>
          <div className= "card-body">
            <h4 className= "card-titleS3"> {titleS3} </h4>
            <p className= "card-textS3"> {descriptionS3} </p>
          </div>
        </div>

        <style> {`
        .cardS3 {
          width: 210px;
          height: 400px;
          background-color: #9C9298;
          margin: 20px;
          justify-content: center;
          border-radius: 15px;
        }

        .img_card3 {
          width:45px;
          height: 45px;
          objet-fit: cover;
        }

        .card-titleS3 {
          height: 80px;
          font-size: 20px;
          margin-top: 5px;
          text-align: center;
        }
        `} 
        </style>
        </>
    );
}

export default Cards3;
