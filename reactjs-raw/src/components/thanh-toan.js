import { NavLink } from "react-router-dom";

function Thanhtoan() {
    return (
        <>
            <div className="container">
                <div className="d-flex">
                    <div className="col-md-12">
                        <div className="d-flex justify-content-around">
                            <div className="col-md-12">
                                <table class="table">
                                    <thead>
                                        <tr >
                                            <th scope="col">SẢN PHẨM</th>
                                            <th scope="col">ĐƠN GIÁ</th>
                                            <th scope="col">SỐ LƯỢNG</th>
                                            <th scope="col">THÀNH TIỀN</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Tên sản phẩm</th>
                                            <td>10.000</td>
                                            <td>2</td>
                                            <td>20.000</td>
                                        </tr>

                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            <div className="info-container">
            <div className="d-flex">
                    <div className="col-md-12">
                        <div className="d-flex justify-content-around">
                            <div className="col-md-6 ">
                                <h5>Thông tin người nhận hàng:</h5>
                                <div className="info">
                                    <div>Họ tên:</div>
                                    <div>Điện thoại:</div>
                                    <div>Địa chỉ:</div>
                                </div>
                            </div>
                            <div className="col-md-6 ">
                                <h5>Hình thức thanh toán:</h5>
                                    <div>COD</div>
                                    <div>Chuyển khoản ngân hàng</div>
                                    <div>Thanh toán qua MOMO</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div className="col-md-12">

                    <NavLink to="#" className="btn btn-outline-danger thanh-toan">Thanh toán</NavLink>
                </div>

            </div>


        </>
    );
}
export default Thanhtoan;