import react from "react";

function Navbar () {
    return (
        <nav className="navbar navbar-expand-lg bg-dark mb-3">
        <div className="container-fluid">
          <a clasName="navbar-brand me-auto text-light-emphasis" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Features</a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar