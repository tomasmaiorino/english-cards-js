import React, {Component} from 'react';

class Footer extends Component {

  render() {
    return (
    <div>
      <footer className="page-footer blue center-on-small-only unique-color-dark pt-0">
       <div className="unique-color">
        <div className="container">
         <div className="row py-4 d-flex align-items-center">
          <div className="col-md-6 col-lg-5">
           <h6 className="mb-0 white-text my-2">Get connected with us on social networks!</h6>
          </div>
          <div className="col-md-6 col-lg-7 text-md-right">
           <a className="icons-sm fb-ic"><i className="fa fa-facebook white-text mr-4"> </i></a>
           <a className="icons-sm tw-ic"><i className="fa fa-twitter white-text mr-4"> </i></a>
           <a className="icons-sm gplus-ic"><i className="fa fa-google-plus white-text mr-4"> </i></a>
           <a className="icons-sm li-ic"><i className="fa fa-linkedin white-text mr-4"> </i></a>
           <a className="icons-sm ins-ic"><i className="fa fa-instagram white-text mr-4"> </i></a>
          </div>
         </div>
        </div>
       </div>

       <div className="container mt-5 mb-4 text-center text-md-left">
        <div className="row mt-3">
         <div className="col-md-3 col-lg-4 col-xl-3 mb-r">
          <h6 className="title font-bold"><strong>Company name</strong></h6>
          <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
            style={{
              width: 60
            }}/>
          <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur
           adipisicing elit.</p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-r">
           <h6 className="title font-bold"><strong>Products</strong></h6>
           <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{
             width: 60
           }}/>
           <p><a href="#!">MDBootstrap</a></p>
           <p><a href="#!">MDWordPress</a></p>
           <p><a href="#!">BrandFlow</a></p>
           <p><a href="#!">Bootstrap Angular</a></p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-r">
           <h6 className="title font-bold"><strong>Useful links</strong></h6>
           <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{
             width: 60
           }}/>
           <p><a href="#!">Your Account</a></p>
           <p><a href="#!">Become an Affiliate</a></p>
           <p><a href="#!">Shipping Rates</a></p>
           <p><a href="#!">Help</a></p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3">
           <h6 className="title font-bold"><strong>Contact</strong></h6>
           <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{
             width: 60
           }}/>
           <p><i className="fa fa-home mr-3"></i> New York, NY 10012, US</p>
           <p><i className="fa fa-envelope mr-3"></i> info@example.com</p>
           <p><i className="fa fa-phone mr-3"></i> + 01 234 567 88</p>
           <p><i className="fa fa-print mr-3"></i> + 01 234 567 89</p>
          </div>
         </div>
        </div>
        <div className="footer-copyright">
         <div className="container-fluid">
          © 2017 English Cards: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
         </div>
        </div>
       </footer>
    </div>
      );
    }
  }
  export default Footer;
