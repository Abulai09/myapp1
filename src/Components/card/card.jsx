import './card.css'

const Card = () => {
  return (
    <div>
      <section className="card">
        <div className="card__container">
          <div className="card_content">
          <h3 className="headTitle">Seen enough?</h3>
          <h2 className="title">Get in touch with us today.</h2>
          <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.</p>
          <div class="card__buttons">
                <button class="btn2">Contact</button>
                <button class="btn2">Book now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Card