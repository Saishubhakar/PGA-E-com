import React from 'react'

const Categories = (props) => {
  return (
    <div>

      <div className='outest'>
        <div className='amazon'>
          <div id="carouselExampleCaptions" className="carousel slide headslider" data-bs-ride="false">

            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div className="carousel-inner">

              <a href='' target={"_blank"} className="carousel-item active slideitem slide1">
                <img src="" className="d-block w-100" alt="" />
                <div className="carousel-caption d-none d-md-block">
                </div>
              </a>
              <div className='Description'>This is one of the best <b>E-commerce website</b> where you can find <b>good quality </b>products at <b>low price</b>.</div>

              <a href='' target={"_blank"} className="carousel-item slideitem slide2">
                <img src="" className="d-block w-100" alt="" />
                <div className="carousel-caption d-none d-md-block">
                </div>
              </a>

              <a href='' target={"_blank"} className="carousel-item slideitem slide3">
                <img src="" className="d-block w-100" />
                <div className="carousel-caption d-none d-md-block">
                </div>
              </a>

            </div>

            <button id='prev' className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>

            <button id='next' className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>

          </div>
        </div>
      </div>



      <div className='contain'>
        <div className='option'>

          <a href='/OnePiece' className='OptionsCards' id='elecOptions'>
            <div className='readhover'>
              <div className='catname'>ELECTRONICS</div>
            </div>
          </a>

          <a href='/OnePiece' className='OptionsCards' id='sportsOptions'>
            <div className='readhover'>
              <div className='catname'>SPORTS</div>
            </div>
          </a>

        </div>

        <div className='option'>

          <a href='/OnePiece' className='OptionsCards' data-aos="zoom-in" data-aos-duration="1300"
            data-aos-once="true" id='yogaOptions'>
            <div className='readhover'>
              <div className='catname'>YOGA</div>
            </div>
          </a>

          <a href='/OnePiece' className='OptionsCards' data-aos="zoom-in" data-aos-duration="1300" data-aos-once="true" id='gymOptions'>
            <div className='readhover'>
              <div className='catname'>GYM</div>
            </div>
          </a>

        </div>

        <div className='option'>

          <a href='/OnePiece' className='OptionsCards' data-aos-duration="1300" data-aos="zoom-in"
            data-aos-once="true" id='schoolOptions'>
            <div className='readhover'>
              <div className='catname'>BACK TO SCHOOL</div>
            </div>
          </a>

          <a href='/OnePiece' className='OptionsCards' data-aos-duration="1300" data-aos="zoom-in"
            data-aos-once="true" id='accessoriesOption'>
            <div className='readhover'>
              <div className='catname'>ACCESSORIES</div>
            </div>
          </a>

        </div>



        <div className='join'>Sell your stuff</div>
        <div className='Addinfo'>
          OnePiece E-commerce webiste is not just about buying good and branded stuff. It is also a place you can sell your ACCESSORIES. Very soon we are launching "MEET-AND-SELL" program which benefits you to sell your ACCESSORIES with the largest market value and the interest part about it is that you'll not be charged tax on the stuff you sell. Make sure you follow us for the regular updates of the program. Our Website makes sure that our customer's satisfication is our prior goal and not the market pressure. Our motto is particularly on terms of <b> When customer purchases from us, he becomes one of us. </b>. We appreciate the idea of franchise and would love to start a franchisey 

        </div>

        <div className='Affliation'>Affiliatied with more than 170 companies</div>


        <div className='companies'>

          <div className='Csize' id='adidas'></div>
          <div className='Csize' id='solaris'></div>
          <div className='Csize' id='redmi'></div>
          <div className='Csize' id='louVo'></div>
          <div className='Csize' id='dell'></div>

        </div>


      </div>
    </div>
  )
}

export default Categories