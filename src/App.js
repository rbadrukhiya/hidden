// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Col, Container, Row } from 'react-bootstrap';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';




function App() {
  return (
    <>

      {/* <Container>
        <Row className='ps-0 '>
    
          <Col>
            <div className="logo mt-3">
              <img src={require('./images/asset 0.png')}></img>
            </div>
          </Col> 
          <Col className='text-center col d-flex mt-4 list-unstyled justify-content-between '>
          <li><a><input className='p-2' type="text" placeholder="Search entire Store here..."></input></a></li>
          <li className='border border-1 pe-4 '><a>USD</a></li>
          <li><a>MY ACCOUNT</a></li>
          <li><a>CART</a></li>
          </Col>
        </Row>
        <Row>
          <Col className='col-auto'>
            <ul className='d-flex list-unstyled mt-4 d-none d-md-block'>
              <li className='me-5'><a href="#">Home</a></li>
              <li  className='me-5'><a href="#">Magento</a></li>
              <li className='me-5'><a href="#">PrestaShop</a></li>
              <li className='me-5'><a href="#">Freebies</a></li>
              <li className='me-5'><a href="#">Services</a></li>
              <li className='me-5'><a href="#">Portfolio</a></li>
              <li className='me-5'><a href="#">Blog</a></li>
              <li className='me-5'><a href="#">Support</a></li>
              <li className='me-5'><a href="#">Contact us</a></li>
            </ul>
          </Col>
        </Row>
  </Container> */
      }


      <div className="container">
        <div className="row justify-content-between d-flex">
          <div className="col-auto">
            <div className="logo mt-3">
              <img src={require("./images/asset 0.png")} alt=""></img>
            </div>
          </div>
          <div className="col-auto list-unstyled d-none d-md-block text-center ">
            <div className="d-flex mt-4 ">
              <li><a href="#">
                <input type="text" placeholder="search entries store here..." className="p-2 pe-5 me-3 "></input></a></li>
              <li><a href="#" className='border me-3 border-1 p-2 pe-4 '>USD</a></li>
              <li><a href="#" className='me-3'>MY ACCOUNT</a></li>
              <li><a href="#" className='me-3'>CART</a></li>
            </div>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row d-flex">
          <div className="col d-none d-md-block"> <ul className="d-flex list-unstyled mt-3">
            <li className="me-5"><a href="#">Home</a></li>
            <li className="me-5"><a href="#">Magento</a></li>
            <li className="me-5"><a href="#">Prestashop</a></li>
            <li className="me-5"><a href="#">Freebies</a></li>
            <li className="me-5"><a href="#">services</a></li>
            <li className="me-5"><a href="#">portfolio</a></li>
            <li className="me-5"><a href="#">Blog</a></li>
            <li className="me-5"><a href="#">Support</a></li>
            <li className="me-5"><a href="#">Contact Us</a></li>
            <li className='d-md-none'>cart</li>
          </ul>
          </div>
          <div className="col">
      <div className="d-md-none">cart</div>

          </div>
        </div>

      </div>









      <div className="main_img mt-3 img-fluid">
        <div className='m-after'>

          <div className="container">

            <div className="row">
              <div className="col m-heading display-1"><strong>Professional & Beautiful</strong></div>
            </div>
            <div className="row ">
              <div className="col d-flex justify-content-center ">
                <p className='m-content mt-4 display-5'>We build high quality Magento 2 & PrestaShop themes that drive more sales </p>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col">
                <button type="button" class="btn btn-color btn-lg p-2">Get Started</button>
              </div>
            </div>

          </div>
        </div>
      </div>














      <div className="container pb-5 d-none d-md-block">
        <div className="row mt-4 d-flex text-center">
          <div className="col">
            <div className="quality_productions">
              <b className='m-2'>QUALITY PRODUCTS</b>
              <p className='mt-2'>Made by professionals with years of work experience.</p>
            </div>
          </div>
          <div className="col">
            <div className="secure_payments">
              <b className='m-2'>SECURE PAYMENTS</b>
              <p className='mt-2'>You can pay via popular payment methods like Paypal & CCAvenue.</p>
            </div>
          </div>
          <div className="col">
            <div className="satisfaction">
              <b className='m-2'>100% SATISFACTION</b>
              <p className='mt-2'>If you are not satisfied with our product, we will return your money.</p>
            </div>
          </div>
          <div className="col">
            <div className="customer_care">
              <b className='m-2'>24/7 CUSTOMER CARE</b>

              <p className='mt-2'>Our customer care team will always help you.</p>
            </div>
          </div>
        </div>
      </div>






      <div className="magento_theme p-5">
        <div className="container">
          <div className="row ">
            <div className="col text-center">
              <div className="magento_heading h1">Magento 2 Themes </div>
            </div>
          </div>
          <div className="row mt-5 g-4 row-cols-xs-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-3         row-cols-xl-3  row-cols-xxl-3 ">
            <div className="col-4 ">
              <span className='label d-none d-lg-block'>21+ Unique Layouts</span>
              <div className="magento-box-1">
                <div className="magento_img1">

                  <img src={require("./images/asset 3.png")} className="img-fluid" alt="" ></img>
                </div>
                <div className="magento_content_1">
                  <a href="#">Etrend - Multipurpose</a><br></br>
                  <span className='theme_name'>Magento 2 Theme</span><br></br>
                  <span className='price_theme justify-content-end d-flex mt-4 me-3 m-b'><b>$59.00 &nbsp; </b> <strike>$99.00</strike></span>


                </div>
              </div>
            </div>
            <div className="col-4 ">
              <span className='bg_color_label d-none d-lg-block'>BESTSELLER</span>

              <div className="magento-box-2 ">
                <div className="magent_img2 ">
                  <img src={require("./images/electro_1.jpg")} className="img-fluid" alt="" ></img>
                </div>
                <div className="magento_content_1">
                  <a href="#">Etrend - Multipurpose</a><br></br>
                  <span className='theme_name'>Magento 2 Theme</span><br></br>
                  <span className='price_theme justify-content-end d-flex mt-4 me-3 m-b'><b>$59.00&nbsp; </b> <strike>$99.00</strike></span>


                </div>
              </div>
            </div>
            <div className="col-4 ">
              <span className='bg_color_label d-none d-lg-block'>TRENDING</span>

              <div className="magento-box-3 ">
                <div className="magento_img3">
                  <img src={require("./images/apparel-pro-magento-theme.jpg")} className="img-fluid" alt="" ></img>
                </div>
                <div className="magento_content_1">
                  <a href="#">Etrend - Multipurpose</a><br></br>
                  <span className='theme_name'>Magento 2 Theme</span><br></br>
                  <span className='price_theme justify-content-end d-flex mt-4 me-3 m-b'><b>$59.00&nbsp; </b> <strike>$99.00</strike></span>


                </div>
              </div>
            </div>
            <div className="col-4 ">
              <span className='bg_color_label d-none d-lg-block'>BESTSELER</span>

              <div className="magento-box-4 ">
                <div className="magento_img4">
                  <img src={require("./images/grocery-magento-theme.jpg")} className="img-fluid" alt="" ></img>

                </div>
                <div className="magento_content_1">
                  <a href="#">Etrend - Multipurpose</a><br></br>
                  <span className='theme_name'>Magento 2 Theme</span><br></br>
                  <span className='price_theme justify-content-end d-flex mt-4 me-3 m-b'><b>$59.00&nbsp; </b> <strike>$99.00</strike></span>


                </div>
              </div>
            </div>
            <div className="col-4 ">
              <span className='bg_color_label d-none d-lg-block'>BESTSELER</span>

              <div className="magento-box-5">
                <div className="magento_img5">
                  <img src={require("./images/bizkick-pro-magento-theme.jpg")} className="img-fluid" alt="" ></img>
                </div>

                <div className="magento_content_1">
                  <a href="#">Etrend - Multipurpose</a><br></br>
                  <span className='theme_name'>Magento 2 Theme</span><br></br>
                  <span className='price_theme justify-content-end d-flex mt-4 me-3 m-b'><b>$59.00&nbsp; </b> <strike>$99.00</strike>
                  </span>


                </div>
              </div>
            </div>
            <div className="col-4 ">
              <span className='bg_color_label d-none d-lg-block '>BESTSELER</span>

              <div className="magento-box-6 ">
                <div className="magento_img6">
                  <img src={require("./images/autopartz-magento-theme_2.jpg")} className="img-fluid" alt="" ></img>
                </div>
                <div className="magento_content_1">
                  <a href="#">Etrend - Multipurpose</a><br></br>
                  <span className='theme_name'>Magento 2 Theme</span><br></br>
                  <span className='price_theme justify-content-end d-flex mt-4 me-3 m-b'><b>$59.00&nbsp; </b>
                    <strike>$99.00</strike>
                  </span>


                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-auto">
              <div className="browse_button  mt-5">
                <button className='btn border border-2  rounded-0 p-3 ps-5 pe-5'>BROWSE THEMES</button>
              </div>
            </div>
          </div>
        </div>
      </div>






      <div className="customer_loyalty ">

        <div className="container">

          <div className=" border border-1 customer_loyalty_heading d-flex  justify-content-center">
            <div className="customer_loyalty_content text-center">
              <h1>Customer Loyalty Program</h1>
              <p className='mt-4'>We are glad to reward every activity you make within our brand! Receive discounts on any of our products simply by purchasing in our website. Sign up today and start earning rewards!</p>

              <button className='btn border border-2 mt-4 rounded-0'>READ MORE</button>
            </div>

          </div>
        </div>
      </div>












      <div className="prestashop_theme p-5">
        <div className="container">
          <div className="row ">
            <div className="col text-center">
              <div className="prestashop_heading h1">Prestashop 1.7 Themes </div>
            </div>
          </div>
          <div className="row mt-5 g-4 row-cols-xs-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-3  row-cols-xl-3  row-cols-xxl-3 ">
            <div className="col-4 ">
              <span className='label d-none d-lg-block'>21+ Unique Layouts</span>
              <div className="prestashop-box-1">
                <div className="magento_img1">

                  <img src={require("./images/asset 3.png")} className="img-fluid" alt="" ></img>
                </div>
                <div className="prestashop_content_1">
                  <a href="#">Etrend - Multipurpose</a><br></br>
                  <span className='theme_name'>Prestashop Theme</span><br></br>
                  <span className='price_theme justify-content-end d-flex mt-4 me-3 m-b'><b>$35.00&nbsp; </b> <strike>$69.00</strike></span>


                </div>
              </div>
            </div>
            <div className="col-4 ">
              <span className='bg_color_label d-none d-lg-block'>BESTSELLER</span>

              <div className="prestashop-box-2 ">
                <div className="prestashop_img2 ">
                  <img src={require("./images/electro_1.jpg")} className="img-fluid" alt="" ></img>
                </div>
                <div className="prestashop_content_1">
                  <a href="#">Etrend - Multipurpose</a><br></br>
                  <span className='theme_name'>Prestashop Theme</span><br></br>
                  <span className='price_theme justify-content-end d-flex mt-4 me-3 m-b'><b>$29.00&nbsp; </b> <strike>$69.00</strike></span>


                </div>
              </div>
            </div>
            <div className="col-4 ">
              <span className='bg_color_label d-none d-lg-block'>TRENDING</span>

              <div className="prestashop-box-3 ">
                <div className="prestashop_img3">
                  <img src={require("./images/apparel-pro-magento-theme.jpg")} className="img-fluid" alt="" ></img>
                </div>
                <div className="prestashop_content_1">
                  <a href="#">Etrend - Multipurpose</a><br></br>
                  <span className='theme_name'>Prestashop Theme</span><br></br>
                  <span className='price_theme justify-content-end d-flex mt-4 me-3 m-b'><b>$29.00 &nbsp;</b> <strike>$69.00</strike></span>


                </div>
              </div>
            </div>
            <div className="col-4 ">
              <span className='bg_color_label d-none d-lg-block'>BESTSELER</span>

              <div className="prestashop-box-4 ">
                <div className="prestashop_img4">
                  <img src={require("./images/grocery-magento-theme.jpg")} className="img-fluid" alt="" ></img>

                </div>
                <div className="prestashop_content_1">
                  <a href="#">Etrend - Multipurpose</a><br></br>
                  <span className='theme_name'>Prestashop Theme</span><br></br>
                  <span className='price_theme justify-content-end d-flex mt-4 me-3 m-b'><b>$29.00&nbsp; </b> <strike>$69.00</strike></span>


                </div>
              </div>
            </div>
            <div className="col-4 ">
              <span className='bg_color_label d-none d-lg-block'>BESTSELER</span>

              <div className="prestashop-box-5">
                <div className="prestashop_img5">
                  <img src={require("./images/bizkick-pro-magento-theme.jpg")} className="img-fluid" alt="" ></img>
                </div>

                <div className="prestashop_content_1">
                  <a href="#">Etrend - Multipurpose</a><br></br>
                  <span className='theme_name'>Prestashop Theme</span><br></br>
                  <span className='price_theme justify-content-end d-flex mt-4 me-3 m-b'><b>$29.00 &nbsp;</b> <strike> $69.00</strike>
                  </span>


                </div>
              </div>
            </div>
            <div className="col-4 ">
              <span className='bg_color_label d-none d-lg-block '>BESTSELER</span>

              <div className="prestashop-box-6 ">
                <div className="prestashop_img6">
                  <img src={require("./images/autopartz-magento-theme_2.jpg")} className="img-fluid" alt="" ></img>
                </div>
                <div className="prestashop_content_1">
                  <a href="#">Etrend - Multipurpose</a><br></br>
                  <span className='theme_name'>Prestashop Theme</span><br></br>
                  <span className='price_theme justify-content-end d-flex mt-4 me-3 m-b'><b>$29.00&nbsp; </b>
                    <strike>$69.00</strike>
                  </span>


                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center ">
            <div className="col-auto">

              <div className="browse_button  mt-5">
                <button className='btn border border-2  rounded-0 p-3 ps-5 pe-5'>BROWSE THEMES
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>








      <div className="container">

        <OwlCarousel className='owl-theme p-5' loop margin={10} items={1} autoPlay autoplayTimeout={1000} dots={false}>
          <div class='item'>
            <div className="row d-flex">
              <div className="col-2">
                <div className="slider_img">
                  <img src={require("./images/lior_elgrissy.jpg")} alt="" className='img-fluid' />
                </div>
              </div>
              <div className="col">
                <div className="content_slider">
                  Amazing service, extremely professional work ethic, and various options to suit his client's needs. I've had several nontraditional graphic ideas in mind, and HiddenTechies went along with my ideas patiently, and made them a reality. I'm extremely satisfied with the service provided by HiddenTechies and would certainly recommend them.
                </div>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-auto slider_client_name"><b>LIOR ELGRISSY </b><br></br> Elgrissy Diamonds<br></br> United States
              </div>
            </div>
          </div>

          <div class='item'>
            <div className="row d-flex">
              <div className="col-2">
                <div className="slider_img">
                  <img src={require("./images/sam-chan.jpg")} alt="" className='img-fluid' />
                </div>
              </div>
              <div className="col">
                <div className="content_slider">
                I am Sam from Silksilky, I have bought some extensions,themes from HiddenTechies,and I have purchased customized services from them several times.I love their perfect products and prompt service,I will buy more services from HiddenTechies,Thank you!
                </div>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-auto slider_client_name"><b>LIOR ELGRISSY </b><br></br> Elgrissy Diamonds<br></br> United States
              </div>
            </div>
          </div>
          <div class='item'>
            <div className="row d-flex">
              <div className="col-2">
                <div className="slider_img">
                  <img src={require("./images/joanna-townsend-porto-racing.jpeg")} alt="" className='img-fluid' />
                </div>
              </div>
              <div className="col">
                <div className="content_slider">
                Incredible support and help from the HiddenTechies team. Nothing seems to be too much trouble for them and they went above and beyond my expectations helping to get my Magento2 site up and working, first with a free template then an upgrade to a Pro version. I also commissioned a bespoke piece of programming work that needed to be embedded seamlessly into the site and it looks and works exactly as I had hoped and has a very professional feel. I have no hesitation in recommending their work and services. I will definitely use them again for future projects. Thank you so much.
                </div>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-auto slider_client_name"><b>LIOR ELGRISSY </b><br></br> Elgrissy Diamonds<br></br> United States
              </div>
            </div>
          </div>
          <div class='item'>
            <div className="row d-flex">
              <div className="col-2">
                <div className="slider_img">
                  <img src={require("./images/joanna-townsend-porto-racing.jpeg")} alt="" className='img-fluid' />
                </div>
              </div>
              <div className="col">
                <div className="content_slider">
                Very impressive support team. I feel indebted to the guys at Hiddentechies for all the help they have given me since I got started. I would definitely recommend Hiddentechies to others interested in a simple to use but powerful magento template. Thanks team for the great work.
                </div>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-auto slider_client_name"><b>LIOR ELGRISSY </b><br></br> Elgrissy Diamonds<br></br> United States
              </div>
            </div>
          </div>

        </OwlCarousel>
      </div>
















      <div className="client_portfolio">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="client_heading text-center mt-4 mb-4">
                <h1>Client Portfolio</h1>
              </div>
            </div>
          </div>
          <div className="row mt-5 d-flex justify-content-between ">
            <div className="col"><div className="client_img_1">
              <img src={require("./images/titanrig.jpeg")} alt="" className="img-fluid" />
            </div>
            </div>
            <div className="col"><div className="client_img_2">
              <img src={require("./images/silksilky.jpeg")} alt="" className="img-fluid" />
            </div>
            </div>
            <div className="col d-none d-md-block"><div className="client_img_3">
              <img src={require("./images/tshirtideal.jpeg")} alt="" className="img-fluid" />
            </div>
            </div>
          </div>
          <div className="client_portfolio_buton client_button mt-5 d-flex justify-content-center">
            {/* <div className="client_button mt-5 "> */}
            <button className='border border-2 p-3'>MORE SUCCESS STORIES!</button>
            {/* </div> */}
          </div>
        </div>
      </div>







      {/* <div className="container ">

        <OwlCarousel className='owl-theme' loop margin={10} nav items={1}>
          <div class='item'>
            <h4>1</h4>
          </div>
          <div class='item'>
            <h4>2</h4>
          </div>
          <div class='item'>
            <h4>3</h4>
          </div>
          <div class='item'>
            <h4>4</h4>
          </div>

        </OwlCarousel>
      </div> */}






      <div className="gaurantee p-5">
        <div className="container">
          <div className="row d-flex ">
            <div className="col-12 ">

              <div className="gaurantee_logo">
                <img src={require("./images/14-guarantee-badge.jpeg")} className="img-fluid" alt="" />
              </div>
              <div className="gaurantee_content d-flex justify-content-center mt-4">
                <div className="gaurantee_heading ">
                  <h1>Not happy with our products? No worries!</h1>
                  <div className="p_content d-flex justify-content-center">
                    <p className='gaurantee_p_content text-center'>Within 14 days of using our products on your website if you are not absolutely delighted, we will return your money.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
