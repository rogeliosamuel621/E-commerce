import React, { Dispatch, useContext } from 'react';
import '../../../styles/containers/cartContent.css';

import CartCard from './CartCard';
import CartContext from '../../../context/cart/cart';
import { IAction, IInitialState } from '../../../context/interfaces';

const CartContent = () => {
  const [state] = useContext(CartContext) as [IInitialState, Dispatch<IAction>];

  return (
    <main className="CartContent">
      <>
        <div className="CartContent-products">
          {state.cart.map((prod: any) => {
            return (
              <CartCard
                key={prod._id}
                img={prod.image}
                name={prod.name}
                price={prod.price}
                _id={prod._id}
                frontID={prod.frontID}
              />
            );
          })}
        </div>
        {/* <div className="CartContent-actions"><PayPal products={state.cart} /></div> */}
      </>
    </main>
  );
};

export default CartContent;