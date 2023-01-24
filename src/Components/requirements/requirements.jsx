import './requirement.css'
import img from './img/IMAGE.png'
import icon1 from './img/Frame.png'
import icon2 from './img/Frame (1).png'
import icon3 from './img/Frame (2).png'


const Requirement = () => {
  return(
    <div>
      <section id='require' className="require">
        <div className="require__container">
          <div className="require_content">
            <div className="require_head">
              <h3 className="headTitle">Our requirements</h3>
              <h2 className="title">How we choose our listings.</h2>
              <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.</p>
            </div>
            <div className="require_items">
              <div className="require_item">
                <div className="img"><img src={img} alt="img" /></div>
              </div>
              <div className="require_item">
                <div className="block">
                  <img src={icon1} alt="icon" />
                  <span className="headTitle">Stellar locations</span>
                  <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="block">
                  <img src={icon2} alt="icon" />
                  <span className="headTitle">High quality builds</span>
                  <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="block">
                  <img src={icon3} alt="icon" />
                  <span className="headTitle">Expert interior design</span>
                  <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="require_back"></div>
    </div>
  )
}

export default Requirement