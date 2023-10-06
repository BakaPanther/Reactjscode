import { NavLink } from "react-router-dom";

function Login() {
    return (
        <>
        <div className="container dangnhap-container">
            <form className="form-dangnhap">
            <h3>Đăng nhập</h3>
                        <div className="form-group">
                            <input type="text" class="form-control" placeholder="Email" />
                        </div>
                        <div class="form-group">
                            <input type="password" className="form-control" placeholder="Mật khẩu" />
                        </div>
                        <div class="form-group">
                            <input type="submit" className="btnSubmit" value="Đăng nhập" />
                        </div>
                        <div class="form-group">Chưa có tài khoản?
                            <NavLink to="/register" className="btnRegister" value="dang-ky"> đăng ký</NavLink>
                        </div>
                        <div class="form-group">
                            <NavLink to="/recover-password" className="btnForgetPwd" value="re-pass"> Quên mật khẩu ?</NavLink>
                        </div>
            </form>
            </div>
        </>
    );
}
export default Login;