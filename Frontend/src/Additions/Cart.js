import React from 'react'

const Cart = () => {
    return (
        <div>
            <div className="cartPage">

                <div className='headingDiv'>
                    <span className='cartHeading'>Shopping Cart</span>
                </div>

                <div className="totalCart">

                    <div className='actualCart'>
                        <div className='cartItem' id='cartItem1'>
                            <div className='cartItemImage' id='cartItemImage1'></div>
                            <div className='cartItemInfo'>
                                <div className='cItemInfo'>
                                    adidas Yoga Mat Thick 8mm<span className='disapper'>EVA Foam Non Slip Exercise Workout Mats for Men and Women - Ideal for Home Gym Fitness, Yoga, Pilates Studio…</span>
                                </div>
                                <div className='status'>Status : In stock</div>
                                <div className='color'>Color : <b>Matte Black</b></div>
                            </div>
                            <div className='priceDiv'>
                                <div className='Priceheading'>ItemPrice</div>
                                <div className='price'>$50.00</div>
                            </div>
                        </div>

                        <div className='cartItem' id='cartItem2'>
                            <div className='cartItemImage' id='cartItemImage2'></div>
                            <div className='cartItemInfo'>
                                <div className='cItemInfo'>
                                    Dell Inspiron 3583 15” Laptop <span className='disapper'>Intel Celeron – 128GB SSD – 4GB DDR4 – 1.6GHz - Intel UHD Graphics 610 - Windows 10 Home - Inspiron Series - New....</span>
                                </div>
                                <div className='status'>Status : In stock</div>
                                <div className='color'>Color : <b>Dark Gray</b></div>
                            </div>
                            <div className='priceDiv'>
                                <div className='Priceheading'>ItemPrice</div>
                                <div className='price'>$300.00</div>
                            </div>
                        </div>

                        <div className='cartItem' id='cartItem3'>
                            <div className='cartItemImage' id='cartItemImage3'></div>
                            <div className='cartItemInfo'>
                                <div className='cItemInfo'>
                                    Titan Workwear Men's Watch <span className='disapper'>| Quartz, Water Resistant, Stainless Steel or Leather Band and it is used by the rickroll creater Rick Astley…</span>
                                </div>
                                <div className='status'>Status : In stock</div>
                                <div className='color'>Color : <b>Brown Strapped</b></div>
                            </div>
                            <div className='priceDiv'>
                                <div className='Priceheading'>ItemPrice</div>
                                <div className='price'>$43.00</div>
                            </div>
                        </div>

                    </div>


                    <div className='MoreDet'>
                        <div className="orderDetails">
                            <div className="SubTotal">Subtotal (14items): <b>$342.98</b></div>
                            <div>Click below to checkout</div>
                            <div className="checkoutButton btn btn-primary">This is a button</div>
                        </div>
                        <div className="newArrHeading">New Arrivals</div>

                        <div className="newArrival">
                            <div className="newArrInfo">
                                <div className="newArrImage" id='newArrImage1'></div>
                                <div className="newArrDetails">
                                    <div className="Detailsheading">Sharpies</div>
                                    <div className="DetailsPrice">$23.00</div>
                                    <button className="DetailsButton">Checkout</button>
                                </div>
                            </div>
                        </div>

                        <div className="newArrival">
                            <div className="newArrInfo">
                                <div className="newArrImage" id='newArrImage2'></div>
                                <div className="newArrDetails">
                                    <div className="Detailsheading">Belly Twister</div>
                                    <div className="DetailsPrice">$34.00</div>
                                    <button className="DetailsButton">Checkout</button>
                                </div>
                            </div>
                        </div>

                        <div className="newArrival">
                            <div className="newArrInfo">
                                <div className="newArrImage" id='newArrImage3'></div>
                                <div className="newArrDetails">
                                    <div className="Detailsheading">Sneakers</div>
                                    <div className="DetailsPrice">$190.00</div>
                                    <button className="DetailsButton">Checkout</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='CartSuggestions'></div>

            </div>



        </div>
    )
}

export default Cart
