import React from "react";
import Figure from "react-bootstrap/Figure";

export default function productView(props) {
  return (
    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src={props.productImgSrc}
      />
      <Figure.Caption>
        <h4>{props.productName}</h4>
        <p>{props.productDesc}</p>
      </Figure.Caption>
    </Figure>
  );
}
