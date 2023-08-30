

const Banner = () => {
  return (
    <div className="carousel">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="image" src="../../../public/Images/Web4.jpeg" alt="First slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{color:"black"}}>Web Development</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img className="image" src="../../../public/Images/Web2.jpeg" alt="Second slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{color:"black"}}>HTML,CSS, JAVASCRIPT</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img className="image" src="../../../public/Images/Web1.jpeg" alt="Third slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{color:"white"}}> Projects By Me</h5>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Banner;
