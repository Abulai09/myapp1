import './works.css'
import img1 from './img/IMAGE.png'
import img2 from './img/IMAGE (1).png'
import img3 from './img/IMAGE (2).png'
import img4 from './img/IMAGE (3).png'
import img5 from './img/IMAGE (4).png'
import img6 from './img/IMAGE (5).png'
import { useState } from 'react'



const Works = () => {

  const [items,setItems] = useState(false)

  return (
    <div>
      <section id='works' className="works">
        <div className="works__container">
          <div className="works_head">
            <h3 className="headTitle">Current listings</h3>
            <h2 className="title">What we have in store for you.</h2>
            <p className="text">Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.</p>
          </div>
          <div className="works_items">
            <div className="work_item">
              <div className="work_img"><img src={img1} alt="img" srcset="" /></div>
              <h6 className="titlee1">House</h6>
              <h5 className="titlee2">California St.</h5>
              <div className="work_desc">
                <div className="desc">
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.6544 13.2792C17.6544 13.2792 17.6544 13.2468 17.6544 13.2792C17.6544 13.2468 17.6544 13.2468 17.6544 13.2468L14.9449 7.24026V1.98052C14.9449 0.909091 14.0842 0 13.0005 0H4.96767C3.91576 0 3.02322 0.876623 3.02322 1.98052V7.24026L0.313752 13.2468C0.281876 13.3117 0.25 13.4091 0.25 13.474V19.4156C0.25 19.7403 0.505009 20 0.82377 20C1.14253 20 1.39754 19.7403 1.39754 19.4156V17.6948H16.6025V19.4156C16.6025 19.7403 16.8575 20 17.1762 20C17.495 20 17.75 19.7403 17.75 19.4156V13.474C17.6862 13.4091 17.6862 13.3442 17.6544 13.2792ZM3.94763 7.92208H13.9886L16.2518 12.9221H1.7163L3.94763 7.92208ZM4.17076 1.98052C4.17076 1.52597 4.5214 1.13636 4.99954 1.13636H13.0005C13.4467 1.13636 13.8292 1.49351 13.8292 1.98052V6.78571H4.17076V1.98052ZM1.39754 16.5584V14.0584H16.6025V16.5584H1.39754Z" fill="#45525B"/>
</svg>
                <span>16</span>
                </div>
                <div className="desc">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.4156 9.10963H18.0519H3.83117V2.7787C3.83117 2.35004 4.15584 2.0203 4.57792 2.0203H7.07792V2.97654C6.3961 3.07546 5.84416 3.66898 5.84416 4.3944V5.84524C5.84416 6.17498 6.1039 6.43877 6.42857 6.43877H8.73377C9.05844 6.43877 9.31818 6.17498 9.31818 5.84524V4.3944C9.31818 3.73493 8.86364 3.17438 8.24675 3.00951V1.42678C8.24675 1.09704 7.98701 0.833252 7.66234 0.833252H4.57792C3.53896 0.833252 2.69481 1.69057 2.69481 2.74572V9.07666H2.17532H1.94805H0.584416C0.25974 9.07666 0 9.34045 0 9.67018C0 9.99992 0.25974 10.2637 0.584416 10.2637H1.36364V12.9016C1.36364 14.847 2.79221 16.4627 4.64286 16.7265L3.92857 18.3422C3.7987 18.639 3.92857 18.9687 4.22078 19.1006C4.28571 19.1336 4.38312 19.1666 4.44805 19.1666C4.67532 19.1666 4.87013 19.0347 4.96753 18.8368L5.87662 16.7925H14.8052C14.8701 16.7925 14.9351 16.7925 15.0325 16.7925L15.9416 18.8368C16.039 19.0677 16.2338 19.1666 16.461 19.1666C16.526 19.1666 16.6234 19.1666 16.6883 19.1006C16.9805 18.9687 17.1104 18.639 16.9805 18.3422L16.1688 16.5287C17.5974 15.9681 18.6364 14.5503 18.6364 12.9016V10.2637H19.4156C19.7403 10.2637 20 9.99992 20 9.67018C20 9.37342 19.7403 9.10963 19.4156 9.10963ZM8.14935 5.28469H6.98052V4.3944C6.98052 4.22953 7.11039 4.09764 7.27273 4.09764H7.85714C8.01948 4.09764 8.14935 4.22953 8.14935 4.3944V5.28469ZM17.5 12.9016C17.5 14.3854 16.2987 15.6384 14.8052 15.6384H5.19481C3.73377 15.6384 2.5 14.4184 2.5 12.9016V10.2637H17.5V12.9016Z" fill="#45525B"/>
</svg>
                <span>2</span>
                </div>
                <div className="desc">
                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.2201 0C14.216 0 15.0512 0.813008 15.0833 1.85366V18.1138C15.0833 19.1545 14.2481 20 13.2201 20H2.77985C1.75188 20 0.916656 19.1545 0.916656 18.1138V1.85366C0.916656 0.813008 1.75188 0 2.74772 0H13.2201ZM13.188 1.10569H2.74772C2.33011 1.10569 2.00887 1.46341 2.00887 1.85366V18.1138C2.00887 18.5366 2.36223 18.8618 2.74772 18.8618H13.188C13.6056 18.8618 13.9269 18.5041 13.9269 18.1138V1.85366C13.9269 1.43089 13.5735 1.10569 13.188 1.10569ZM11.4854 8.68293C12.0637 8.68293 12.5777 9.17073 12.5777 9.78862C12.5777 10.4065 12.0958 10.8943 11.4854 10.8943C10.8751 10.8943 10.3932 10.4065 10.3932 9.78862C10.3932 9.17073 10.8751 8.68293 11.4854 8.68293Z" fill="#45525B"/>
</svg>

                <span>11</span>
                </div>
              </div>
            </div>
            <div className="work_item">
              <div className="work_img"><img src={img2} alt="img" srcset="" /></div>
              <h6 className="titlee1">Villa</h6>
              <h5 className="titlee2">Welford Gardens</h5>
              <div className="work_desc">
                <div className="desc">
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.6544 13.2792C17.6544 13.2792 17.6544 13.2468 17.6544 13.2792C17.6544 13.2468 17.6544 13.2468 17.6544 13.2468L14.9449 7.24026V1.98052C14.9449 0.909091 14.0842 0 13.0005 0H4.96767C3.91576 0 3.02322 0.876623 3.02322 1.98052V7.24026L0.313752 13.2468C0.281876 13.3117 0.25 13.4091 0.25 13.474V19.4156C0.25 19.7403 0.505009 20 0.82377 20C1.14253 20 1.39754 19.7403 1.39754 19.4156V17.6948H16.6025V19.4156C16.6025 19.7403 16.8575 20 17.1762 20C17.495 20 17.75 19.7403 17.75 19.4156V13.474C17.6862 13.4091 17.6862 13.3442 17.6544 13.2792ZM3.94763 7.92208H13.9886L16.2518 12.9221H1.7163L3.94763 7.92208ZM4.17076 1.98052C4.17076 1.52597 4.5214 1.13636 4.99954 1.13636H13.0005C13.4467 1.13636 13.8292 1.49351 13.8292 1.98052V6.78571H4.17076V1.98052ZM1.39754 16.5584V14.0584H16.6025V16.5584H1.39754Z" fill="#45525B"/>
</svg>
                <span>39</span>
                </div>
                <div className="desc">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.4156 9.10963H18.0519H3.83117V2.7787C3.83117 2.35004 4.15584 2.0203 4.57792 2.0203H7.07792V2.97654C6.3961 3.07546 5.84416 3.66898 5.84416 4.3944V5.84524C5.84416 6.17498 6.1039 6.43877 6.42857 6.43877H8.73377C9.05844 6.43877 9.31818 6.17498 9.31818 5.84524V4.3944C9.31818 3.73493 8.86364 3.17438 8.24675 3.00951V1.42678C8.24675 1.09704 7.98701 0.833252 7.66234 0.833252H4.57792C3.53896 0.833252 2.69481 1.69057 2.69481 2.74572V9.07666H2.17532H1.94805H0.584416C0.25974 9.07666 0 9.34045 0 9.67018C0 9.99992 0.25974 10.2637 0.584416 10.2637H1.36364V12.9016C1.36364 14.847 2.79221 16.4627 4.64286 16.7265L3.92857 18.3422C3.7987 18.639 3.92857 18.9687 4.22078 19.1006C4.28571 19.1336 4.38312 19.1666 4.44805 19.1666C4.67532 19.1666 4.87013 19.0347 4.96753 18.8368L5.87662 16.7925H14.8052C14.8701 16.7925 14.9351 16.7925 15.0325 16.7925L15.9416 18.8368C16.039 19.0677 16.2338 19.1666 16.461 19.1666C16.526 19.1666 16.6234 19.1666 16.6883 19.1006C16.9805 18.9687 17.1104 18.639 16.9805 18.3422L16.1688 16.5287C17.5974 15.9681 18.6364 14.5503 18.6364 12.9016V10.2637H19.4156C19.7403 10.2637 20 9.99992 20 9.67018C20 9.37342 19.7403 9.10963 19.4156 9.10963ZM8.14935 5.28469H6.98052V4.3944C6.98052 4.22953 7.11039 4.09764 7.27273 4.09764H7.85714C8.01948 4.09764 8.14935 4.22953 8.14935 4.3944V5.28469ZM17.5 12.9016C17.5 14.3854 16.2987 15.6384 14.8052 15.6384H5.19481C3.73377 15.6384 2.5 14.4184 2.5 12.9016V10.2637H17.5V12.9016Z" fill="#45525B"/>
</svg>
                <span>9</span>
                </div>
                <div className="desc">
                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.2201 0C14.216 0 15.0512 0.813008 15.0833 1.85366V18.1138C15.0833 19.1545 14.2481 20 13.2201 20H2.77985C1.75188 20 0.916656 19.1545 0.916656 18.1138V1.85366C0.916656 0.813008 1.75188 0 2.74772 0H13.2201ZM13.188 1.10569H2.74772C2.33011 1.10569 2.00887 1.46341 2.00887 1.85366V18.1138C2.00887 18.5366 2.36223 18.8618 2.74772 18.8618H13.188C13.6056 18.8618 13.9269 18.5041 13.9269 18.1138V1.85366C13.9269 1.43089 13.5735 1.10569 13.188 1.10569ZM11.4854 8.68293C12.0637 8.68293 12.5777 9.17073 12.5777 9.78862C12.5777 10.4065 12.0958 10.8943 11.4854 10.8943C10.8751 10.8943 10.3932 10.4065 10.3932 9.78862C10.3932 9.17073 10.8751 8.68293 11.4854 8.68293Z" fill="#45525B"/>
</svg>

                <span>9</span>
                </div>
              </div>
            </div>
            <div className="work_item">
              <div className="work_img"><img src={img3} alt="img" srcset="" /></div>
              <h6 className="titlee1">House</h6>
              <h5 className="titlee2">The Grove</h5>
              <div className="work_desc">
                <div className="desc">
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.6544 13.2792C17.6544 13.2792 17.6544 13.2468 17.6544 13.2792C17.6544 13.2468 17.6544 13.2468 17.6544 13.2468L14.9449 7.24026V1.98052C14.9449 0.909091 14.0842 0 13.0005 0H4.96767C3.91576 0 3.02322 0.876623 3.02322 1.98052V7.24026L0.313752 13.2468C0.281876 13.3117 0.25 13.4091 0.25 13.474V19.4156C0.25 19.7403 0.505009 20 0.82377 20C1.14253 20 1.39754 19.7403 1.39754 19.4156V17.6948H16.6025V19.4156C16.6025 19.7403 16.8575 20 17.1762 20C17.495 20 17.75 19.7403 17.75 19.4156V13.474C17.6862 13.4091 17.6862 13.3442 17.6544 13.2792ZM3.94763 7.92208H13.9886L16.2518 12.9221H1.7163L3.94763 7.92208ZM4.17076 1.98052C4.17076 1.52597 4.5214 1.13636 4.99954 1.13636H13.0005C13.4467 1.13636 13.8292 1.49351 13.8292 1.98052V6.78571H4.17076V1.98052ZM1.39754 16.5584V14.0584H16.6025V16.5584H1.39754Z" fill="#45525B"/>
</svg>
                <span>6</span>
                </div>
                <div className="desc">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.4156 9.10963H18.0519H3.83117V2.7787C3.83117 2.35004 4.15584 2.0203 4.57792 2.0203H7.07792V2.97654C6.3961 3.07546 5.84416 3.66898 5.84416 4.3944V5.84524C5.84416 6.17498 6.1039 6.43877 6.42857 6.43877H8.73377C9.05844 6.43877 9.31818 6.17498 9.31818 5.84524V4.3944C9.31818 3.73493 8.86364 3.17438 8.24675 3.00951V1.42678C8.24675 1.09704 7.98701 0.833252 7.66234 0.833252H4.57792C3.53896 0.833252 2.69481 1.69057 2.69481 2.74572V9.07666H2.17532H1.94805H0.584416C0.25974 9.07666 0 9.34045 0 9.67018C0 9.99992 0.25974 10.2637 0.584416 10.2637H1.36364V12.9016C1.36364 14.847 2.79221 16.4627 4.64286 16.7265L3.92857 18.3422C3.7987 18.639 3.92857 18.9687 4.22078 19.1006C4.28571 19.1336 4.38312 19.1666 4.44805 19.1666C4.67532 19.1666 4.87013 19.0347 4.96753 18.8368L5.87662 16.7925H14.8052C14.8701 16.7925 14.9351 16.7925 15.0325 16.7925L15.9416 18.8368C16.039 19.0677 16.2338 19.1666 16.461 19.1666C16.526 19.1666 16.6234 19.1666 16.6883 19.1006C16.9805 18.9687 17.1104 18.639 16.9805 18.3422L16.1688 16.5287C17.5974 15.9681 18.6364 14.5503 18.6364 12.9016V10.2637H19.4156C19.7403 10.2637 20 9.99992 20 9.67018C20 9.37342 19.7403 9.10963 19.4156 9.10963ZM8.14935 5.28469H6.98052V4.3944C6.98052 4.22953 7.11039 4.09764 7.27273 4.09764H7.85714C8.01948 4.09764 8.14935 4.22953 8.14935 4.3944V5.28469ZM17.5 12.9016C17.5 14.3854 16.2987 15.6384 14.8052 15.6384H5.19481C3.73377 15.6384 2.5 14.4184 2.5 12.9016V10.2637H17.5V12.9016Z" fill="#45525B"/>
</svg>
                <span>3</span>
                </div>
                <div className="desc">
                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.2201 0C14.216 0 15.0512 0.813008 15.0833 1.85366V18.1138C15.0833 19.1545 14.2481 20 13.2201 20H2.77985C1.75188 20 0.916656 19.1545 0.916656 18.1138V1.85366C0.916656 0.813008 1.75188 0 2.74772 0H13.2201ZM13.188 1.10569H2.74772C2.33011 1.10569 2.00887 1.46341 2.00887 1.85366V18.1138C2.00887 18.5366 2.36223 18.8618 2.74772 18.8618H13.188C13.6056 18.8618 13.9269 18.5041 13.9269 18.1138V1.85366C13.9269 1.43089 13.5735 1.10569 13.188 1.10569ZM11.4854 8.68293C12.0637 8.68293 12.5777 9.17073 12.5777 9.78862C12.5777 10.4065 12.0958 10.8943 11.4854 10.8943C10.8751 10.8943 10.3932 10.4065 10.3932 9.78862C10.3932 9.17073 10.8751 8.68293 11.4854 8.68293Z" fill="#45525B"/>
</svg>

                <span>8</span>
                </div>
              </div>
            </div>
          </div>

          <div className={ !items ? "works_items items2 " : "works_items items2 _active"}>
            <div className="work_item">
              <div className="work_img"><img src={img4} alt="img" srcset="" /></div>
              <h6 className="titlee1">Apartment</h6>
              <h5 className="titlee2">Wallace St.</h5>
              <div className="work_desc">
                <div className="desc">
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.6544 13.2792C17.6544 13.2792 17.6544 13.2468 17.6544 13.2792C17.6544 13.2468 17.6544 13.2468 17.6544 13.2468L14.9449 7.24026V1.98052C14.9449 0.909091 14.0842 0 13.0005 0H4.96767C3.91576 0 3.02322 0.876623 3.02322 1.98052V7.24026L0.313752 13.2468C0.281876 13.3117 0.25 13.4091 0.25 13.474V19.4156C0.25 19.7403 0.505009 20 0.82377 20C1.14253 20 1.39754 19.7403 1.39754 19.4156V17.6948H16.6025V19.4156C16.6025 19.7403 16.8575 20 17.1762 20C17.495 20 17.75 19.7403 17.75 19.4156V13.474C17.6862 13.4091 17.6862 13.3442 17.6544 13.2792ZM3.94763 7.92208H13.9886L16.2518 12.9221H1.7163L3.94763 7.92208ZM4.17076 1.98052C4.17076 1.52597 4.5214 1.13636 4.99954 1.13636H13.0005C13.4467 1.13636 13.8292 1.49351 13.8292 1.98052V6.78571H4.17076V1.98052ZM1.39754 16.5584V14.0584H16.6025V16.5584H1.39754Z" fill="#45525B"/>
</svg>
                <span>10</span>
                </div>
                <div className="desc">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.4156 9.10963H18.0519H3.83117V2.7787C3.83117 2.35004 4.15584 2.0203 4.57792 2.0203H7.07792V2.97654C6.3961 3.07546 5.84416 3.66898 5.84416 4.3944V5.84524C5.84416 6.17498 6.1039 6.43877 6.42857 6.43877H8.73377C9.05844 6.43877 9.31818 6.17498 9.31818 5.84524V4.3944C9.31818 3.73493 8.86364 3.17438 8.24675 3.00951V1.42678C8.24675 1.09704 7.98701 0.833252 7.66234 0.833252H4.57792C3.53896 0.833252 2.69481 1.69057 2.69481 2.74572V9.07666H2.17532H1.94805H0.584416C0.25974 9.07666 0 9.34045 0 9.67018C0 9.99992 0.25974 10.2637 0.584416 10.2637H1.36364V12.9016C1.36364 14.847 2.79221 16.4627 4.64286 16.7265L3.92857 18.3422C3.7987 18.639 3.92857 18.9687 4.22078 19.1006C4.28571 19.1336 4.38312 19.1666 4.44805 19.1666C4.67532 19.1666 4.87013 19.0347 4.96753 18.8368L5.87662 16.7925H14.8052C14.8701 16.7925 14.9351 16.7925 15.0325 16.7925L15.9416 18.8368C16.039 19.0677 16.2338 19.1666 16.461 19.1666C16.526 19.1666 16.6234 19.1666 16.6883 19.1006C16.9805 18.9687 17.1104 18.639 16.9805 18.3422L16.1688 16.5287C17.5974 15.9681 18.6364 14.5503 18.6364 12.9016V10.2637H19.4156C19.7403 10.2637 20 9.99992 20 9.67018C20 9.37342 19.7403 9.10963 19.4156 9.10963ZM8.14935 5.28469H6.98052V4.3944C6.98052 4.22953 7.11039 4.09764 7.27273 4.09764H7.85714C8.01948 4.09764 8.14935 4.22953 8.14935 4.3944V5.28469ZM17.5 12.9016C17.5 14.3854 16.2987 15.6384 14.8052 15.6384H5.19481C3.73377 15.6384 2.5 14.4184 2.5 12.9016V10.2637H17.5V12.9016Z" fill="#45525B"/>
</svg>
                <span>5</span>
                </div>
                <div className="desc">
                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.2201 0C14.216 0 15.0512 0.813008 15.0833 1.85366V18.1138C15.0833 19.1545 14.2481 20 13.2201 20H2.77985C1.75188 20 0.916656 19.1545 0.916656 18.1138V1.85366C0.916656 0.813008 1.75188 0 2.74772 0H13.2201ZM13.188 1.10569H2.74772C2.33011 1.10569 2.00887 1.46341 2.00887 1.85366V18.1138C2.00887 18.5366 2.36223 18.8618 2.74772 18.8618H13.188C13.6056 18.8618 13.9269 18.5041 13.9269 18.1138V1.85366C13.9269 1.43089 13.5735 1.10569 13.188 1.10569ZM11.4854 8.68293C12.0637 8.68293 12.5777 9.17073 12.5777 9.78862C12.5777 10.4065 12.0958 10.8943 11.4854 10.8943C10.8751 10.8943 10.3932 10.4065 10.3932 9.78862C10.3932 9.17073 10.8751 8.68293 11.4854 8.68293Z" fill="#45525B"/>
</svg>

                <span>21</span>
                </div>
              </div>
            </div>
            <div className="work_item">
              <div className="work_img"><img src={img5} alt="img" srcset="" /></div>
              <h6 className="titlee1">Apartment</h6>
              <h5 className="titlee2">Dwight Way</h5>
              <div className="work_desc">
                <div className="desc">
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.6544 13.2792C17.6544 13.2792 17.6544 13.2468 17.6544 13.2792C17.6544 13.2468 17.6544 13.2468 17.6544 13.2468L14.9449 7.24026V1.98052C14.9449 0.909091 14.0842 0 13.0005 0H4.96767C3.91576 0 3.02322 0.876623 3.02322 1.98052V7.24026L0.313752 13.2468C0.281876 13.3117 0.25 13.4091 0.25 13.474V19.4156C0.25 19.7403 0.505009 20 0.82377 20C1.14253 20 1.39754 19.7403 1.39754 19.4156V17.6948H16.6025V19.4156C16.6025 19.7403 16.8575 20 17.1762 20C17.495 20 17.75 19.7403 17.75 19.4156V13.474C17.6862 13.4091 17.6862 13.3442 17.6544 13.2792ZM3.94763 7.92208H13.9886L16.2518 12.9221H1.7163L3.94763 7.92208ZM4.17076 1.98052C4.17076 1.52597 4.5214 1.13636 4.99954 1.13636H13.0005C13.4467 1.13636 13.8292 1.49351 13.8292 1.98052V6.78571H4.17076V1.98052ZM1.39754 16.5584V14.0584H16.6025V16.5584H1.39754Z" fill="#45525B"/>
</svg>
                <span>9</span>
                </div>
                <div className="desc">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.4156 9.10963H18.0519H3.83117V2.7787C3.83117 2.35004 4.15584 2.0203 4.57792 2.0203H7.07792V2.97654C6.3961 3.07546 5.84416 3.66898 5.84416 4.3944V5.84524C5.84416 6.17498 6.1039 6.43877 6.42857 6.43877H8.73377C9.05844 6.43877 9.31818 6.17498 9.31818 5.84524V4.3944C9.31818 3.73493 8.86364 3.17438 8.24675 3.00951V1.42678C8.24675 1.09704 7.98701 0.833252 7.66234 0.833252H4.57792C3.53896 0.833252 2.69481 1.69057 2.69481 2.74572V9.07666H2.17532H1.94805H0.584416C0.25974 9.07666 0 9.34045 0 9.67018C0 9.99992 0.25974 10.2637 0.584416 10.2637H1.36364V12.9016C1.36364 14.847 2.79221 16.4627 4.64286 16.7265L3.92857 18.3422C3.7987 18.639 3.92857 18.9687 4.22078 19.1006C4.28571 19.1336 4.38312 19.1666 4.44805 19.1666C4.67532 19.1666 4.87013 19.0347 4.96753 18.8368L5.87662 16.7925H14.8052C14.8701 16.7925 14.9351 16.7925 15.0325 16.7925L15.9416 18.8368C16.039 19.0677 16.2338 19.1666 16.461 19.1666C16.526 19.1666 16.6234 19.1666 16.6883 19.1006C16.9805 18.9687 17.1104 18.639 16.9805 18.3422L16.1688 16.5287C17.5974 15.9681 18.6364 14.5503 18.6364 12.9016V10.2637H19.4156C19.7403 10.2637 20 9.99992 20 9.67018C20 9.37342 19.7403 9.10963 19.4156 9.10963ZM8.14935 5.28469H6.98052V4.3944C6.98052 4.22953 7.11039 4.09764 7.27273 4.09764H7.85714C8.01948 4.09764 8.14935 4.22953 8.14935 4.3944V5.28469ZM17.5 12.9016C17.5 14.3854 16.2987 15.6384 14.8052 15.6384H5.19481C3.73377 15.6384 2.5 14.4184 2.5 12.9016V10.2637H17.5V12.9016Z" fill="#45525B"/>
</svg>
                <span>11</span>
                </div>
                <div className="desc">
                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.2201 0C14.216 0 15.0512 0.813008 15.0833 1.85366V18.1138C15.0833 19.1545 14.2481 20 13.2201 20H2.77985C1.75188 20 0.916656 19.1545 0.916656 18.1138V1.85366C0.916656 0.813008 1.75188 0 2.74772 0H13.2201ZM13.188 1.10569H2.74772C2.33011 1.10569 2.00887 1.46341 2.00887 1.85366V18.1138C2.00887 18.5366 2.36223 18.8618 2.74772 18.8618H13.188C13.6056 18.8618 13.9269 18.5041 13.9269 18.1138V1.85366C13.9269 1.43089 13.5735 1.10569 13.188 1.10569ZM11.4854 8.68293C12.0637 8.68293 12.5777 9.17073 12.5777 9.78862C12.5777 10.4065 12.0958 10.8943 11.4854 10.8943C10.8751 10.8943 10.3932 10.4065 10.3932 9.78862C10.3932 9.17073 10.8751 8.68293 11.4854 8.68293Z" fill="#45525B"/>
</svg>

                <span>29</span>
                </div>
              </div>
            </div>
            <div className="work_item">
              <div className="work_img"><img src={img6} alt="img" srcset="" /></div>
              <h6 className="titlee1">House</h6>
              <h5 className="titlee2">North Avenue</h5>
              <div className="work_desc">
                <div className="desc">
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.6544 13.2792C17.6544 13.2792 17.6544 13.2468 17.6544 13.2792C17.6544 13.2468 17.6544 13.2468 17.6544 13.2468L14.9449 7.24026V1.98052C14.9449 0.909091 14.0842 0 13.0005 0H4.96767C3.91576 0 3.02322 0.876623 3.02322 1.98052V7.24026L0.313752 13.2468C0.281876 13.3117 0.25 13.4091 0.25 13.474V19.4156C0.25 19.7403 0.505009 20 0.82377 20C1.14253 20 1.39754 19.7403 1.39754 19.4156V17.6948H16.6025V19.4156C16.6025 19.7403 16.8575 20 17.1762 20C17.495 20 17.75 19.7403 17.75 19.4156V13.474C17.6862 13.4091 17.6862 13.3442 17.6544 13.2792ZM3.94763 7.92208H13.9886L16.2518 12.9221H1.7163L3.94763 7.92208ZM4.17076 1.98052C4.17076 1.52597 4.5214 1.13636 4.99954 1.13636H13.0005C13.4467 1.13636 13.8292 1.49351 13.8292 1.98052V6.78571H4.17076V1.98052ZM1.39754 16.5584V14.0584H16.6025V16.5584H1.39754Z" fill="#45525B"/>
</svg>
                <span>19</span>
                </div>
                <div className="desc">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.4156 9.10963H18.0519H3.83117V2.7787C3.83117 2.35004 4.15584 2.0203 4.57792 2.0203H7.07792V2.97654C6.3961 3.07546 5.84416 3.66898 5.84416 4.3944V5.84524C5.84416 6.17498 6.1039 6.43877 6.42857 6.43877H8.73377C9.05844 6.43877 9.31818 6.17498 9.31818 5.84524V4.3944C9.31818 3.73493 8.86364 3.17438 8.24675 3.00951V1.42678C8.24675 1.09704 7.98701 0.833252 7.66234 0.833252H4.57792C3.53896 0.833252 2.69481 1.69057 2.69481 2.74572V9.07666H2.17532H1.94805H0.584416C0.25974 9.07666 0 9.34045 0 9.67018C0 9.99992 0.25974 10.2637 0.584416 10.2637H1.36364V12.9016C1.36364 14.847 2.79221 16.4627 4.64286 16.7265L3.92857 18.3422C3.7987 18.639 3.92857 18.9687 4.22078 19.1006C4.28571 19.1336 4.38312 19.1666 4.44805 19.1666C4.67532 19.1666 4.87013 19.0347 4.96753 18.8368L5.87662 16.7925H14.8052C14.8701 16.7925 14.9351 16.7925 15.0325 16.7925L15.9416 18.8368C16.039 19.0677 16.2338 19.1666 16.461 19.1666C16.526 19.1666 16.6234 19.1666 16.6883 19.1006C16.9805 18.9687 17.1104 18.639 16.9805 18.3422L16.1688 16.5287C17.5974 15.9681 18.6364 14.5503 18.6364 12.9016V10.2637H19.4156C19.7403 10.2637 20 9.99992 20 9.67018C20 9.37342 19.7403 9.10963 19.4156 9.10963ZM8.14935 5.28469H6.98052V4.3944C6.98052 4.22953 7.11039 4.09764 7.27273 4.09764H7.85714C8.01948 4.09764 8.14935 4.22953 8.14935 4.3944V5.28469ZM17.5 12.9016C17.5 14.3854 16.2987 15.6384 14.8052 15.6384H5.19481C3.73377 15.6384 2.5 14.4184 2.5 12.9016V10.2637H17.5V12.9016Z" fill="#45525B"/>
</svg>
                <span>9</span>
                </div>
                <div className="desc">
                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.2201 0C14.216 0 15.0512 0.813008 15.0833 1.85366V18.1138C15.0833 19.1545 14.2481 20 13.2201 20H2.77985C1.75188 20 0.916656 19.1545 0.916656 18.1138V1.85366C0.916656 0.813008 1.75188 0 2.74772 0H13.2201ZM13.188 1.10569H2.74772C2.33011 1.10569 2.00887 1.46341 2.00887 1.85366V18.1138C2.00887 18.5366 2.36223 18.8618 2.74772 18.8618H13.188C13.6056 18.8618 13.9269 18.5041 13.9269 18.1138V1.85366C13.9269 1.43089 13.5735 1.10569 13.188 1.10569ZM11.4854 8.68293C12.0637 8.68293 12.5777 9.17073 12.5777 9.78862C12.5777 10.4065 12.0958 10.8943 11.4854 10.8943C10.8751 10.8943 10.3932 10.4065 10.3932 9.78862C10.3932 9.17073 10.8751 8.68293 11.4854 8.68293Z" fill="#45525B"/>
</svg>

                <span>9</span>
                </div>
              </div>
            </div>
          </div>

          <div className="btn" onClick={ () => setItems(true) }><p className="text">Show all listings</p><svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.4582 4.6708L15.8364 0.953735C15.3393 0.471893 14.5581 0.471893 14.061 0.8849C13.5639 1.36674 13.5639 2.12392 13.99 2.60576L16.0494 4.73963H1.27827C0.568121 4.73963 0 5.29031 0 5.97866C0 6.667 0.568121 7.21768 1.27827 7.21768H16.1204L14.061 9.35155C13.5639 9.83339 13.6349 10.5906 14.132 11.0724C14.3451 11.2789 14.7001 11.4166 14.9842 11.4166C15.3393 11.4166 15.6233 11.2789 15.9074 11.0724L19.5292 7.35535C20.1683 6.52933 20.1683 5.42798 19.4582 4.6708Z" fill="#45525B"/>
</svg>
</div>
        </div>
      </section>
    </div>
  )
}

export default Works