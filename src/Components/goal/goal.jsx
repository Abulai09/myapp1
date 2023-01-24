import './goal.css'

const Goal = () => {
  return(
    <div>
      <section id='goal' className="goal">
        <div className="goal__container">
          <div className="goal_items">
            <div className="goal_item">
              <h3 className="headTitle">Our goal</h3>
              <h2 className="title">We are dedicated to finding a house that you'll love.</h2>
            </div>
            <div className="goal_item">
              <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
              <p className="text">Interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Goal