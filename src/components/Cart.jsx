import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useCart } from "react-use-cart";
import EmptyCart from "./EmptyCart";
import { toast } from 'react-toastify';

const Cart = () => {
  const { t, i18n } = useTranslation();
  const { items, removeItem, updateItemQuantity, cartTotal } = useCart();
  const [promocode, setPromocode] = useState();
  const [istrue, setIstrue] = useState(false);
  const code = "dinare50";
  const handleChangeTotal = () => {
    if (code == promocode) {
      setIstrue(true);
      toast.success(`${t("cart-page.7")}`)
    }
    if(promocode==" "){
      toast.error(`${t("cart-page.8")}`)
    }
    setPromocode(" ");
  };
  return (
    <>
      {items.length == 0 ? (
        <EmptyCart />
      ) : (
        <div className="cart-page">
          <table className="table table-dark ">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">{t("cart-page.1")}</th>
                <th scope="col">{t("cart-page.2")}</th>
                <th scope="col">{t("cart-page.3")}</th>
                <th scope="col">{t("cart-page.4")}</th>
              </tr>
            </thead>

            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <th
                      scope="row"
                      className="remove-item"
                      onClick={() => removeItem(item.id)}

                    >
                      X
                    </th>
                    <td className="item-image-name">
                      <img
                        className="item-image"
                        src={item.image}
                        alt="item-image"
                      />
                      {item.name}
                    </td>

                    <td>{item.price}.00$</td>
                    <td className="item-quantity">
                      <span>{item.quantity}</span>
                      <button
                      className="add-item-btn"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>{" "}
                      <button
                      className="remove-item-btn"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                    </td>
                    <td>{item.quantity * item.price}.00$</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="cart-total-info">
            <div className="total-price-info">
              <h4>
                {t("cart-page.5")}:{istrue ? cartTotal / 2 : cartTotal}.00$
              </h4>
            </div>
            <div className="cart-buy">
              <button>{t("cart-page.6")}</button>
            </div>
          </div>
          <div className="promo-code">
            <label htmlFor="promocode">Promo Code</label> <br />
            <input
              type="text"
              name="promocode"
              id="promocode"
              placeholder="Enter promo code "
              onChange={(e) => setPromocode(e.target.value)}
              value={promocode}
            />
            <button onClick={handleChangeTotal}>Get discount</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
