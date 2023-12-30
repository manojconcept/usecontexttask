function NavBar() {
    return ( 
        <>
            <nav style={{position:"sticky",top:"0",zIndex:"9000"}} className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul style={{display:"flex", }} className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
                        </li>
                    </ul>
                </div>
                </div>
               
            </nav>
        </>
    );
}

export default NavBar;