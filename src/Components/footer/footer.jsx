import img from './img/IMAGE.png'
import './footer.css'

const Footer = () =>{
  return(
    <div>
      <section className="footer">
        <div className="footer__container">
          <div className="logo"><img src={img} alt="logo" /></div>
          <div className="footer_items">
            <div className="footer_item">
              <div className="headTitle">Pages</div>
              <a href="#" className="text">Start</a>
              <a href="#" className="text">Listings</a>
              <a href="#" className="text">Listings alt. 2</a>
              <a href="#" className="text">Contact</a>
              <a href="#" className="text">Legal</a>
            </div>
            <div className="footer_item">
              <div className="headTitle">Company</div>
              <a href="#" className="text">About</a>
              <a href="#" className="text">Our team</a>
              <a href="#" className="text">Newsroom</a>

            </div>
            <div className="footer_item">
              <div className="headTitle">Utility</div>
              <a href="#" className="text">Instructions</a>
              <a href="#" className="text">Style guide</a>
              <a href="#" className="text">Licenses</a>
              <a href="#" className="text">Changelog</a>
              <a href="#" className="text">404</a>
            </div>
            <div className="footer_item">
              <div className="headTitle">Newsletter</div>
              <p className="text">Subscribe to our (infrequent) newsletter where we share news about upcoming listings and projects.</p>
            </div>
          </div>
          <div className="footer_footer">
            <p className="text">© Estate, LLC. All rights reserved. Powered by R.Abo</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer