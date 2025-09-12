import { ProductCard } from "../components/Element/ProductCard"
import React from 'react'

export const Home = () => {
    return (
        <>
           <div className="flex flex-wrap justify-center items-start gap-4 px-0 mx-0 w-full">
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </>
    )
}