import React, { useEffect, useState } from 'react';
import { IProduct } from './interfaces';
import Cookie from 'universal-cookie';
import AxiosInstance from '../utils/Axios';
import { API_KEY } from '../config';

const CartContext = React.createContext({});

export function CartContextProvider({ children }: any) {
  const [productsCart, setProductsCart] = useState<IProduct[]>([]);
  const cookie = new Cookie();

  async function getCartProducts() {
    const token: string | null = cookie.get('token');
    const headers = { api_key: API_KEY, authorization: token };

    if (!token) return;

    try {
      const res = await AxiosInstance.get('/cart/get', { headers });

      setProductsCart(res.data.data.cart);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getCartProducts();
  }, []);

  return (
    <CartContext.Provider value={{ productsCart, setProductsCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;