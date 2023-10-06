import { NavLink } from "react-router-dom";
function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-info header">
        <div className="container-fluid header">
          <NavLink className="navbar-brand" to="/">Trang Chủ</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Về chúng tôi</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Sản phẩm</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Tin tức</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Liên hệ</a>
              </li>
            </ul>
            
            
            <NavLink to="/login" className="btn btn-outline-success">Đăng nhập</NavLink>
            <NavLink to="/register" className="btn btn-outline-danger">Đăng ký</NavLink>
            <NavLink to="/cart" className="btn btn-outline-dark">Giỏ hàng</NavLink>
            <form className="d-flex">
              
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-dark " type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;