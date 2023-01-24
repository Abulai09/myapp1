import './team.css'
import img1 from './img/IMAGE.png'
import img2 from './img/IMAGE (1).png'
import img3 from './img/IMAGE (2).png'
import img4 from './img/IMAGE (3).png'
import img5 from './img/IMAGE (4).png'
import img6 from './img/IMAGE (5).png'


const Team = () => {
  return(
    <div>
      <section id='team' className="team">
        <div className="team__container">
          <div className="team_desc">
            <h3 className="headTitle">Our people</h3>
            <h2 className="title">Meet our team of dedicated and talented agents.</h2>
            <p className="text">Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.</p>
          </div>
          <div className="team_items">
            <div className="item">
            <div className="team_item">
              <img src={img1} alt="ava" srcset="" />
              <div className="data">
                <div className="headTitle">Ava Orn</div>
                <span className="text">Managing Broker</span>
              </div>
            </div>
            <div className="team_item">
              <img src={img2} alt="ava" srcset="" />
              <div className="data">
                <div className="headTitle">Ella Hessel</div>
                <span className="text">Agent</span>
              </div>
            </div>
            <div className="team_item">
              <img src={img3} alt="ava" srcset="" />
              <div className="data">
                <div className="headTitle">Daryl Gislason</div>
                <span className="text">REALTOR</span>
              </div>
            </div>
            </div>
            <div className="item">
            <div className="team_item">
              <img src={img4} alt="ava" srcset="" />
              <div className="data">
                <div className="headTitle">David Sporer</div>
                <span className="text">Agent</span>
              </div>
            </div>
            <div className="team_item">
              <img src={img5} alt="ava" srcset="" />
              <div className="data">
                <div className="headTitle">Trevor Torphy</div>
                <span className="text">Agent</span>
              </div>
            </div>
            <div className="team_item">
              <img src={img6} alt="ava" srcset="" />
              <div className="data">
                <div className="headTitle">Amanda Giovanni</div>
                <span className="text">REALTOR</span>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Team