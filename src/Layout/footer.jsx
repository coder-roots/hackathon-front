export default function Footer(){
    // <!-- Footer -->
   return( <footer className="bg-white">
    <div className="container py-6">
      <div className="row py-5 mx-6" >
        <div className="col-lg-6 col-md-6 mb-4 mb-lg-0">
        <h3 className="text-uppercase font-weight-bold mb-4 font">About</h3>
          <p className="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
          <ul className="list-inline mt-4">
            <li className="list-inline-item"><a href="#" target="_blank" title="twitter"><i className="fa fa-twitter"></i></a></li>
            <li className="list-inline-item"><a href="#" target="_blank" title="facebook"><i className="fa fa-facebook"></i></a></li>
            <li className="list-inline-item"><a href="#" target="_blank" title="instagram"><i className="fa fa-instagram"></i></a></li>
            <li className="list-inline-item"><a href="#" target="_blank" title="pinterest"><i className="fa fa-pinterest"></i></a></li>
            <li className="list-inline-item"><a href="#" target="_blank" title="vimeo"><i className="fa fa-vimeo"></i></a></li>
          </ul>
        </div>
        {/* <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 className="text-uppercase font-weight-bold mb-4">Shop</h6>
          <ul className="list-unstyled mb-0">
            <li className="mb-2"><a href="#" className="text-muted">For Women</a></li>
            <li className="mb-2"><a href="#" className="text-muted">For Men</a></li>
            <li className="mb-2"><a href="#" className="text-muted">Stores</a></li>
            <li className="mb-2"><a href="#" className="text-muted">Our Blog</a></li>
          </ul>
        </div> */}
        <div className="col-lg-6 col-md-6 mb-4 mb-lg-0 ">
          <h3 className="text-uppercase font-weight-bold mb-4 font">Organization detail</h3>
          <ul className="list-unstyled mb-0 d-flex  ogdetail">
            <li className="mb-2"><a href="#" className="text-muted">Name</a></li>
            <li className="mb-2"><a href="#" className="text-muted">VC</a></li>
            <li className="mb-2"><a href="#" className="text-muted">ADDRESS</a></li>
            <li className="mb-2"><a href="#" className="text-muted">AMbition</a></li>
          </ul>
        </div>
      </div>
    </div>

  </footer>)
    {/* <!-- End --> */}
}