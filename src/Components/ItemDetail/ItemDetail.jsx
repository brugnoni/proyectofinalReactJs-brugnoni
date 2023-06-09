import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import styles from "./ItemDetail.module.css";

const ItemDetail = ({ productSelected, onAdd, getQuantityById }) => {
  return (
    <div className={styles.containerItemDetail}>
      <div className={styles.containerImage}>
        <img src={productSelected.img} alt="" />
      </div>

      <div className={styles.containerDetail}>
        <h2 style={{ fontFamily: "monospace" }}>
          <span style={{ fontSize: "23px" }}>Nombre:</span>{" "}
          {productSelected.title}
        </h2>
        <h2 style={{ fontFamily: "monospace" }}>
          <span style={{ fontSize: "23px" }}>Descripcion:</span>{" "}
          {productSelected.description}
        </h2>
        <h2 style={{ fontFamily: "monospace" }}>
          <span style={{ fontSize: "23px" }}>Precio:</span> $
          {productSelected.price}.-
        </h2>

        <ItemCount
          onAdd={onAdd}
          stock={productSelected.stock}
          initial={getQuantityById(productSelected.id)}
        />
      </div>
    </div>
  );
};

export default ItemDetail;