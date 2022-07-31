import React from 'react'
import "./rating.css"

const Rating = () => {
  return (
    <div className="max-width flex rating">
        <div className="rating-block flex flec-col">
            <div className="flex">
                <div className="value flex flex-col">
                    4.8
                </div>
            </div>
        </div>
    </div>
  )
}

export default Rating