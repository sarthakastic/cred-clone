import React from 'react'
import Button from './common/Button'
import "./rating.css"

const getIosPrefix = () => {
    return <img src="https://web-images.credcdn.in/_next/assets/images/home-page/apple-store-logo.png" alt="" className="rating-icon" />
}

const getAndroidPrefix = () => {
    return <img src="https://web-images.credcdn.in/_next/assets/images/home-page/play-store-logo.png" alt="" className="rating-icon" />
}

const Rating = () => {
  return (
    <div className="max-width flex rating">
        <div className="rating-block flex flec-col">
            <div className="flex">
                <div className="value flex flex-col">
                    4.8
                    <img className='stars' src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png" alt="" />
                </div>
                <div className='platform'>app <br />store</div>
            </div>
            <div className="non-mobile">
                <Button buttonText={"Download the app"} customClasses="rating-button"
                prefix={getIosPrefix()}></Button>
            </div>
        </div>
        <div className="rating-block flex flec-col">
            <div className="flex">
                <div className="value flex flex-col">
                    4.7
                    <img className='stars' src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-android.png" alt="" />
                </div>
                <div className='platform'>play <br />store</div>
            </div>
            <div className="non-mobile">
                <Button buttonText={"Download the app"} customClasses="rating-button"
                prefix={getAndroidPrefix()}></Button>
            </div>
        </div>
        <div   className='only-mobile'><Button buttonText={"Download the App"} /></div>
    </div>
  )
}

export default Rating