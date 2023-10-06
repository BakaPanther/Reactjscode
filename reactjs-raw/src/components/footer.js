
import { Navbar, NavbarBrand } from 'reactstrap';
function Footer() {
    return (
        <>
            <div class="button-more">
                <button class="btn btn-outline-dark " type="submit">Xem thêm</button>
            </div>
            <Navbar className="my-2" color="secondary" dark>
                <NavbarBrand href="/" >
                    <img
                        alt="logo"
                        src="/logo192.png"
                        style={{
                            height: 40,
                            width: 40
                        }}
                    />
                    My Brand
                </NavbarBrand>
            </Navbar>
        </>
    )
}
export default Footer