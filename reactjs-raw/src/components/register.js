import { NavLink } from "react-router-dom";

function Register() {
    return (
        <>
        <div className="container dangky-container">
            <form className="form-dangky">
            <h3>Hãy tạo tài khoản của bạn</h3>
                        <div class="form-group">
                            
                            <input type="text" className="form-control" placeholder="Email" />
                        </div>
                        <div class="form-group">
                            <input type="password" className="form-control" placeholder="Mật khẩu" />
                        </div>
                        <div class="form-group">
                            <input type="password" className="form-control" placeholder="Nhập lại mật khẩu" />
                        </div>
                        <div class="form-group">
                            <input type="submit" className="btnSubmit" value="Đăng ký" />
                        </div>
            </form>
            </div>
        </>
    );
}
export default Register;