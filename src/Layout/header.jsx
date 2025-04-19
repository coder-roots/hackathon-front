import { Link } from "react-router-dom";

export default function Header(){
    return(  
<>
{/* sub header start */}
<div className="subHeader">
<h4>sardar beant singh state university</h4>
</div>
{/* sub header end */}

        <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            {/* <!-- ***** Logo Start ***** --> */}
                           <Link to={'/'} ><a href="" className="logo">
                                THE HACKIFY
                            </a></Link>
                            {/* <!-- ***** Logo End ***** -->
                            <!-- ***** Menu Start ***** --> */}
                            <ul className="nav">
                            <Link to={'/'}> <li className="scroll-to-section"><a href="" className="active">Home</a></li></Link>   
                            
                            <li className="has-sub">
                                   <Link to={'/events'} > <a href="">EVENTS</a></Link> 
                                    <ul className="sub-menu">
                                    <Link to={'/universityevents'}> <li><a href="">University Events</a></li></Link>   
                                    <Link to={'/localevents'}> <li><a href="">Local Events</a></li></Link>   
                                    <Link to={'/communityevents'}> <li><a href="">Community Events</a></li></Link>                                           
                                    </ul>
                                </li>
                                <li className="scroll-to-section"><a href="#apply">Apply Now</a></li>
                                <li className="has-sub">
                                    <a href="javascript:void(0)">Pages</a>
                                    <ul className="sub-menu">
                                        <li><a href="meetings.html">Upcoming EVENTS</a></li>
                                        <li><a href="meeting-details.html">Meeting Details</a></li>
                                    </ul>
                                </li>
                                <li className="scroll-to-section"><a href="#courses">Courses</a></li> 
                             <Link to={'/login'}><li className="scroll-to-section"><a href="">Login</a></li> </Link>   
                            </ul>        
                            <a className='menu-trigger'>
                                <span>Menu</span>
                            </a>
                            {/* <!-- ***** Menu End ***** --> */}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
   </>

            )
        }