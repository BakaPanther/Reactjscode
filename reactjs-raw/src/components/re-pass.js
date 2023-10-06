import { NavLink } from "react-router-dom";

function RePass() {
    return (
        <>
        <div className="container repass-container">
            <form className="form-repass">
            <h3>Hãy nhập email bạn muốn lấy lại mật khẩu</h3>
                        <div class="form-group">
                            
                            <input type="text" className="form-control" placeholder="Email" />
                        </div>
                        <div class="form-group">
                            <input type="submit" className="btnSubmit" value="Gửi" />
                        </div>
            </form>
            </div>
        </>
    );
}
export default RePass;