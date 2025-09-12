import React from 'react'
import { Link } from 'react-router-dom'

export const ProductCard = ( ) => {
    // const { id, overview, name, price, rating, postar, long_description, best_seller } = product;
    //   console.log(product.length,"id======");
    return (
        <>
            <div className="m-3 shadow-xl max-w-sm bg-white rounded-lg border border-gray-200  dark:bg-gray-200 dark:border-white-700 mt-50">
               <img className="h-385px" src="https://ishalife.sadhguru.org/media/catalog/product/r/s/rs0001100000_3__2.jpg?optimize=medium&fit=bounds&height=460&width=460" alt="" />
                <div className="p-5">
                    <Link to={""}>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-900 dark:text-amber-900">Divine Rudra</h5>
                    </Link>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Authentic Isha Shanmukhi (six faced) Rudraksha Bead. Energized single bead for children below 14 years of age.</p>
                    <div className="flex items-center my-2">
                        {/* <Rating  /> */}
                            <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                            <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                            <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                            <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                            <i className="text-lg bi bi-star text-yellow-500 mr-1"></i>
                    </div>
                    <p className="flex justify-between items-center">
                        <span className="text-2xl dark:text-amber-800">
                            <span>$</span><span>50</span>
                        </span>
                        <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-amber-700 rounded-lg hover:bg-amber-800">Add To Cart <i className="ml-1 bi bi-plus-lg"></i></button>
                    </p>
                </div>
            </div>
        </>
    )
}
