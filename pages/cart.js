import { CheckIcon, ClockIcon, XIcon } from '@heroicons/react/solid';
import axios from 'axios';
import Layout from 'components/Layout';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { Store } from 'utils/Store';

function CartScreen() {
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const router = useRouter();

  const updateCartHandler = async (item, quantity) => {
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock <= 0) {
      window.alert('Sorry, Product is out of Stock');
      return;
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } });
  };

  const removeItemHandler = (item) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };

  const checkoutHandler = () => {
    router.push('/shipping');
  };

  return (
    <Layout>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Shopping Cart
          </h1>

          {cartItems.length === 0 ? (
            <div>
              Cart is empty.{' '}
              <Link href="/">
                <a>Go shopping</a>
              </Link>
            </div>
          ) : (
            <form className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
              <section aria-labelledby="cart-heading" className="lg:col-span-7">
                <h2 id="cart-heading" className="sr-only">
                  Items in your shopping cart
                </h2>

                <ul
                  role="list"
                  className="border-t border-b border-gray-200 divide-y divide-gray-200"
                >
                  {cartItems.map((product, productIdx) => (
                    <li key={product._id} className="flex py-6 sm:py-10">
                      <div className="flex-shrink-0">
                        <Image
                          src={product.image}
                          alt={product.name}
                          className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"
                          width={96}
                          height={96}
                        />
                      </div>

                      <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                          <div>
                            <div className="flex justify-between">
                              <h3 className="text-sm">
                                <Link href={`/product/${product.slug}`}>
                                  <a className="font-medium text-gray-700 hover:text-gray-800">
                                    {product.name}
                                  </a>
                                </Link>
                              </h3>
                            </div>
                            <p className="mt-1 text-sm font-medium text-gray-900">
                              $ {product.price}
                            </p>
                          </div>

                          <div className="mt-4 sm:mt-0 sm:pr-9">
                            <label
                              htmlFor={`quantity-${productIdx}`}
                              className="sr-only"
                            >
                              Quantity, {product.name}
                            </label>
                            <select
                              id={`quantity-${productIdx}`}
                              name={`quantity-${productIdx}`}
                              className="max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              onChange={(e) =>
                                updateCartHandler(product, e.target.value)
                              }
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>

                            <div className="absolute top-0 right-0">
                              <button
                                type="button"
                                className="-m-2 p-2 inline-flex text-gray-400 hover:text-gray-500"
                                onClick={() => removeItemHandler(product)}
                              >
                                <span className="sr-only">Remove</span>
                                <XIcon className="h-5 w-5" aria-hidden="true" />
                              </button>
                            </div>
                          </div>
                        </div>

                        <p className="mt-4 flex text-sm text-gray-700 space-x-2">
                          {product.countInStock ? (
                            <CheckIcon
                              className="flex-shrink-0 h-5 w-5 text-green-500"
                              aria-hidden="true"
                            />
                          ) : (
                            <ClockIcon
                              className="flex-shrink-0 h-5 w-5 text-gray-300"
                              aria-hidden="true"
                            />
                          )}

                          <span>
                            {product.countInStock
                              ? 'In stock'
                              : `Ships in 3-4 weeks`}
                          </span>
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Order summary */}
              <section
                aria-labelledby="summary-heading"
                className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
              >
                <h2
                  id="summary-heading"
                  className="text-lg font-medium text-gray-900"
                >
                  Order summary
                </h2>

                <dl className="mt-6 space-y-4">
                  <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                    <dt className="text-base font-medium text-gray-900">
                      Sub total
                    </dt>
                    <dd className="text-base font-medium text-gray-900">
                      ${cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                    </dd>
                  </div>
                </dl>

                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                    onClick={checkoutHandler}
                  >
                    Checkout
                  </button>
                </div>
              </section>
            </form>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(CartScreen), { ssr: false });
