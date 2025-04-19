import { Link } from "react-router-dom"

export default function Home() {
   
   return (<>
  



  {/* <!-- ***** Main Banner Area Start ***** -->  */}
  <section className="section main-banner" id="top" data-section="section1">
<div id="carouselExampleControls" className="carousel slide"  data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.shutterstock.com/shutterstock/photos/2480023489/display_1500/stock-photo-hands-typing-on-laptop-with-programming-code-on-screen-representing-software-development-perfect-2480023489.jpg" className="d-block w-100" height={"600px"} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.shutterstock.com/shutterstock/photos/1889569450/display_1500/stock-photo-hackathon-inscription-against-laptop-and-code-background-technology-concept-1889569450.jpg" className="d-block w-100" height={"600px"} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://media.istockphoto.com/id/1255034209/vector/hackathon-isometric-landing-software-development.jpg?s=1024x1024&w=is&k=20&c=fj5Do7ftqzY3oxUX4vGKOscixpPi1KbOQEodAkoukks=" className="d-block w-100" height={"600px"} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev adjustment" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next  adjustment1" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  </section>
  {/*<!-- ***** Main Banner Area End ***** --> */}
{/* moving text start */}

<h1 className="movingwords">SBSSU IS ORGANIZING HACKHTON FOR 2025 </h1>
{/* moving text end*/}
{/* WINNERS SECTION START */}
<section className="winner">
  <div className="container winner-detail">
    <img src="https://www.shutterstock.com/editorial/image-editorial/N6Tdkay5N3j5Q0zbNzQ0MQ==/robert-downey-jr-1500w-5886283cz.jpg"  alt=""></img>
    <h2>winner for hackthon 2024</h2>
    <button className="btn-primary">view details</button>
  </div>
</section>
{/* WINNERS SECTION END */}
{/*about part start  */}
<section className="about">
  <div className="container about-data">
    <h1>what is sbssu hackthon 2025</h1>
    <br/>
    <p>what is sbssu hackthon 2025 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur doloremque expedita ab voluptatibus exercitationem iure eum illo, cupiditate error.</p>
  </div>
</section>
{/* about part end */}
{/* video description start */}
<section className="video-intro">
  <div className="container video">
  <iframe width={"800px"} height="420" src="https://www.youtube.com/embed/6HtgXuuyP1s?si=ssLygjY6yQruQXzW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
</section>
{/* video description end */}
  {/* <section className="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="owl-service-item owl-carousel">
          
            <div className="item">
              <div className="icon">
                <img src="assets/images/service-icon-01.png" alt=""/>
              </div>
              <div className="down-content">
                <h4>Best Education</h4>
                <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
              </div>
            </div>
            
            <div className="item">
              <div className="icon">
                <img src="assets/images/service-icon-02.png" alt=""/>
              </div>
              <div className="down-content">
                <h4>Best Teachers</h4>
                <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
              </div>
            </div>
            
            <div className="item">
              <div className="icon">
                <img src="assets/images/service-icon-03.png" alt=""/>
              </div>
              <div className="down-content">
                <h4>Best Students</h4>
                <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
              </div>
            </div>
            
            <div className="item">
              <div className="icon">
                <img src="assets/images/service-icon-02.png" alt=""/>
              </div>
              <div className="down-content">
                <h4>Online Meeting</h4>
                <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
              </div>
            </div>
            
            <div className="item">
              <div className="icon">
                <img src="assets/images/service-icon-03.png" alt=""/>
              </div>
              <div className="down-content">
                <h4>Best Networking</h4>
                <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </section> */}

  <section className="upcoming-meetings" id="meetings">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-heading">
            <h2>Upcoming Meetings</h2>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="categories">
            <h4>Event Catgories</h4>
            <ul>
            <Link to={'/universityevents'}><li><a >University Events</a></li></Link>  
              <li><a >Local events</a></li>
              <li><a>Community Events</a></li>
            </ul>
            <div className="main-button-red">
              <a href="meetings.html">All Upcoming Meetings</a>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="row">
            <div className="col-lg-6">
              <div className="meeting-item">
                <div className="thumb">
                  <div className="price">
                    <span>$22.00</span>
                  </div>
                  <a href="meeting-details.html"><img src="assets/images/meeting-01.jpg" alt="New Lecturer Meeting"/></a>
                </div>
                <div className="down-content">
                  <div className="date">
                    <h6>Nov <span>10</span></h6>
                  </div>
                  <a href="meeting-details.html"><h4>New Lecturers Meeting</h4></a>
                  <p>Morbi in libero blandit lectus<br/>cursus ullamcorper.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="meeting-item">
                <div className="thumb">
                  <div className="price">
                    <span>$36.00</span>
                  </div>
                  <a href="meeting-details.html"><img src="assets/images/meeting-02.jpg" alt="Online Teaching"/></a>
                </div>
                <div className="down-content">
                  <div className="date">
                    <h6>Nov <span>24</span></h6>
                  </div>
                  <a href="meeting-details.html"><h4>Online Teaching Techniques</h4></a>
                  <p>Morbi in libero blandit lectus<br/>cursus ullamcorper.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="meeting-item">
                <div className="thumb">
                  <div className="price">
                    <span>$14.00</span>
                  </div>
                  <a href="meeting-details.html"><img src="assets/images/meeting-03.jpg" alt="Higher Education"/></a>
                </div>
                <div className="down-content">
                  <div className="date">
                    <h6>Nov <span>26</span></h6>
                  </div>
                  <a href="meeting-details.html"><h4>Higher Education Conference</h4></a>
                  <p>Morbi in libero blandit lectus<br/>cursus ullamcorper.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="meeting-item">
                <div className="thumb">
                  <div className="price">
                    <span>$48.00</span>
                  </div>
                  <a href="meeting-details.html"><img src="assets/images/meeting-04.jpg" alt="Student Training"/></a>
                </div>
                <div className="down-content">
                  <div className="date">
                    <h6>Nov <span>30</span></h6>
                  </div>
                  <a href="meeting-details.html"><h4>Student Training Meetup</h4></a>
                  <p>Morbi in libero blandit lectus<br/>cursus ullamcorper.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="apply-now" id="apply">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 align-self-center">
          <div className="row">
            <div className="col-lg-12">
              <div className="item">
                <h3>APPLY FOR BACHELOR DEGREE</h3>
                <p>You are allowed to use this edu meeting CSS template for your school or university or business. You can feel free to modify or edit this layout.</p>
                <div className="main-button-red">
                  <div className="scroll-to-section"><a href="#contact">Join Us Now!</a></div>
              </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="item">
                <h3>APPLY FOR BACHELOR DEGREE</h3>
                <p>You are not allowed to redistribute the template ZIP file on any other template website. Please contact us for more information.</p>
                <div className="main-button-yellow">
                  <div className="scroll-to-section"><a href="#contact">Join Us Now!</a></div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="accordions is-first-expanded">
            <article className="accordion">
                <div className="accordion-head">
                    <span>About Edu Meeting HTML Template</span>
                    <span className="icon">
                        <i className="icon fa fa-chevron-right"></i>
                    </span>
                </div>
                <div className="accordion-body">
                    <div className="content">
                        <p>If you want to get the latest collection of HTML CSS templates for your websites, you may visit <a rel="nofollow" href="https://www.toocss.com/" target="_blank">Too CSS website</a>. If you need a working contact form script, please visit <a href="https://templatemo.com/contact" target="_parent">our contact page</a> for more info.</p>
                    </div>
                </div>
            </article>
            <article className="accordion">
                <div className="accordion-head">
                    <span>HTML CSS Bootstrap Layout</span>
                    <span className="icon">
                        <i className="icon fa fa-chevron-right"></i>
                    </span>
                </div>
                <div className="accordion-body">
                    <div className="content">
                        <p>Etiam posuere metus orci, vel consectetur elit imperdiet eu. Cras ipsum magna, maximus at semper sit amet, eleifend eget neque. Nunc facilisis quam purus, sed vulputate augue interdum vitae. Aliquam a elit massa.<br/><br/>
                        Nulla malesuada elit lacus, ac ultricies massa varius sed. Etiam eu metus eget nibh consequat aliquet. Proin fringilla, quam at euismod porttitor, odio odio tempus ligula, ut feugiat ex erat nec mauris. Donec viverra velit eget lectus sollicitudin tincidunt.</p>
                    </div>
                </div>
            </article>
            <article className="accordion">
                <div className="accordion-head">
                    <span>Please tell your friends</span>
                    <span className="icon">
                        <i className="icon fa fa-chevron-right"></i>
                    </span>
                </div>
                <div className="accordion-body">
                    <div className="content">
                        <p>Ut vehicula mauris est, sed sodales justo rhoncus eu. Morbi porttitor quam velit, at ullamcorper justo suscipit sit amet. Quisque at suscipit mi, non efficitur velit.<br/><br/>
                        Cras et tortor semper, placerat eros sit amet, porta est. Mauris porttitor sapien et quam volutpat luctus. Nullam sodales ipsum ac neque ultricies varius.</p>
                    </div>
                </div>
            </article>
            <article className="accordion last-accordion">
                <div className="accordion-head">
                    <span>Share this to your colleagues</span>
                    <span className="icon">
                        <i className="icon fa fa-chevron-right"></i>
                    </span>
                </div>
                <div className="accordion-body">
                    <div className="content">
                        <p>Maecenas suscipit enim libero, vel lobortis justo condimentum id. Interdum et malesuada fames ac ante ipsum primis in faucibus.<br/><br/>
                        Sed eleifend metus sit amet magna tristique, posuere laoreet arcu semper. Nulla pellentesque ut tortor sit amet maximus. In eu libero ullamcorper, semper nisi quis, convallis nisi.</p>
                    </div>
                </div>
            </article>
        </div>
        </div>
      </div>
    </div>
  </section>

  <section className="our-courses" id="courses">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-heading">
            <h2>Our Popular Courses</h2>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="owl-courses-item owl-carousel">
            <div className="item">
              <img src="assets/images/course-01.jpg" alt="Course One"/>
              <div className="down-content">
                <h4>Morbi tincidunt elit vitae justo rhoncus</h4>
                <div className="info">
                  <div className="row">
                    <div className="col-8">
                      <ul>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                      </ul>
                    </div>
                    <div className="col-4">
                       <span>$160</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <img src="assets/images/course-02.jpg" alt="Course Two"/>
              <div className="down-content">
                <h4>Curabitur molestie dignissim purus vel</h4>
                <div className="info">
                  <div className="row">
                    <div className="col-8">
                      <ul>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                      </ul>
                    </div>
                    <div className="col-4">
                       <span>$180</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <img src="assets/images/course-03.jpg" alt=""/>
              <div className="down-content">
                <h4>Nulla at ipsum a mauris egestas tempor</h4>
                <div className="info">
                  <div className="row">
                    <div className="col-8">
                      <ul>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                      </ul>
                    </div>
                    <div className="col-4">
                       <span>$140</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <img src="assets/images/course-04.jpg" alt=""/>
              <div className="down-content">
                <h4>Aenean molestie quis libero gravida</h4>
                <div className="info">
                  <div className="row">
                    <div className="col-8">
                      <ul>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                      </ul>
                    </div>
                    <div className="col-4">
                       <span>$120</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <img src="assets/images/course-01.jpg" alt=""/>
              <div className="down-content">
                <h4>Lorem ipsum dolor sit amet adipiscing elit</h4>
                <div className="info">
                  <div className="row">
                    <div className="col-8">
                      <ul>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                      </ul>
                    </div>
                    <div className="col-4">
                       <span>$250</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <img src="assets/images/course-02.jpg" alt=""/>
              <div className="down-content">
                <h4>TemplateMo is the best website for Free CSS</h4>
                <div className="info">
                  <div className="row">
                    <div className="col-8">
                      <ul>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                      </ul>
                    </div>
                    <div className="col-4">
                       <span>$270</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <img src="assets/images/course-03.jpg" alt=""/>
              <div className="down-content">
                <h4>Web Design Templates at your finger tips</h4>
                <div className="info">
                  <div className="row">
                    <div className="col-8">
                      <ul>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                      </ul>
                    </div>
                    <div className="col-4">
                       <span>$340</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <img src="assets/images/course-04.jpg" alt=""/>
              <div className="down-content">
                <h4>Please visit our website again</h4>
                <div className="info">
                  <div className="row">
                    <div className="col-8">
                      <ul>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                      </ul>
                    </div>
                    <div className="col-4">
                       <span>$360</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <img src="assets/images/course-01.jpg" alt=""/>
              <div className="down-content">
                <h4>Responsive HTML Templates for you</h4>
                <div className="info">
                  <div className="row">
                    <div className="col-8">
                      <ul>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                      </ul>
                    </div>
                    <div className="col-4">
                       <span>$400</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <img src="assets/images/course-02.jpg" alt=""/>
              <div className="down-content">
                <h4>Download Free CSS Layouts for your business</h4>
                <div className="info">
                  <div className="row">
                    <div className="col-8">
                      <ul>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                      </ul>
                    </div>
                    <div className="col-4">
                       <span>$430</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <img src="assets/images/course-03.jpg" alt=""/>
              <div className="down-content">
                <h4>Morbi in libero blandit lectus cursus</h4>
                <div className="info">
                  <div className="row">
                    <div className="col-8">
                      <ul>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                      </ul>
                    </div>
                    <div className="col-4">
                       <span>$480</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <img src="assets/images/course-04.jpg" alt=""/>
              <div className="down-content">
                <h4>Curabitur molestie dignissim purus</h4>
                <div className="info">
                  <div className="row">
                    <div className="col-8">
                      <ul>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                      </ul>
                    </div>
                    <div className="col-4">
                       <span>$560</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="our-facts">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-12">
              <h2>A Few Facts About Our University</h2>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-12">
                  <div className="count-area-content percentage">
                    <div className="count-digit">94</div>
                    <div className="count-title">Succesed Students</div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="count-area-content">
                    <div className="count-digit">126</div>
                    <div className="count-title">Current Teachers</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-12">
                  <div className="count-area-content new-students">
                    <div className="count-digit">2345</div>
                    <div className="count-title">New Students</div>
                  </div>
                </div> 
                <div className="col-12">
                  <div className="count-area-content">
                    <div className="count-digit">32</div>
                    <div className="count-title">Awards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <div className="col-lg-6 align-self-center">
          <div className="video">
            <a href="https://www.youtube.com/watch?v=HndV87XpkWg" target="_blank"><img src="assets/images/play-icon.png" alt=""/></a>
          </div>
        </div>
      </div>
    </div>
  </section>



    </>)
}