import './banner.css'
import logo from './images/Estate-Logotype-Color.svg'

const Banner = () => {
  return(
    <div>
      <section className="banner">
        <div className="banner__container">
          <div className="banner_contenr">
            <div className="banner_logo"><img src={logo} alt="logo" srcset="" /></div>
            <h2 className="title">We're here to help you find a <br /> new home.</h2>
            <a href="#goal"><svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.9393 21.0607C11.5251 21.6464 12.4749 21.6464 13.0607 21.0607L22.6066 11.5147C23.1924 10.9289 23.1924 9.97919 22.6066 9.3934C22.0208 8.80761 21.0711 8.80761 20.4853 9.3934L12 17.8787L3.51472 9.3934C2.92893 8.80761 1.97918 8.80761 1.3934 9.3934C0.807611 9.97918 0.807611 10.9289 1.3934 11.5147L10.9393 21.0607ZM10.5 -6.55671e-08L10.5 20L13.5 20L13.5 6.55671e-08L10.5 -6.55671e-08Z" fill="#3A4443"/>
</svg>
</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Banner