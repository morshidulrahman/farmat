import React from 'react'

const Review = () => {
    return (
        <div className="flex items-start gap-10 md:flex-nowrap flex-wrap">
            <div className="border p-5 md:w-2/6 w-full">
                <h1 className="text-orange font-bold md:text-5xl text-2xl">5.00</h1>
                <p className="text-sm">⭐⭐⭐⭐⭐</p>
                <p className="text-sm">Based on 1 reviews</p>
                <div className="mt-3 border-t pt-5">
                    <img src="images/rating.png" alt="rating" />
                </div>
            </div>
            <div className="py-5 md:py-0 flex-1">
                <h3 className="text-bold text-title text-lg">ADD YOUR REVIEW</h3>
                <p>Your rating: ⭐⭐⭐⭐⭐</p>
                <textarea className="w-full border p-2 h-40 mt-2" placeholder="Your review" />
                <button className=" bg-orange text-white px-4 py-2 mt-2 rounded-sm">Submit</button>
            </div>
        </div>
    )
}

export default Review