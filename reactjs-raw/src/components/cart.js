import { NavLink } from "react-router-dom";

function Cart() {
    return (
        <>
            <div className="container">
                <div className="d-flex">
                    <div className="col-md-12">
                        <div className="d-flex justify-content-around">
                            <div className="col-md-8">
                                <table class="table">
                                    <thead>
                                        <tr >
                                            <th scope="col">SẢN PHẨM</th>
                                            <th scope="col">ĐƠN GIÁ</th>
                                            <th scope="col">SỐ LƯỢNG</th>
                                            <th scope="col">THÀNH TIỀN</th>
                                            <th scope="col">#</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Tên sản phẩm</th>
                                            <td>10.000</td>
                                            <td>2</td>
                                            <td>20.000</td>
                                            <td>
                                                <button className="btn btn-outline-danger"> Xóa</button>
                                                <button className="btn btn-outline-success"> Cập nhật</button>
                                            </td>
                                        </tr>

                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <NavLink to="/" className="btn btn-outline-danger mua-hang">Tiếp tục mua hàng</NavLink>
                    <NavLink to="/thanh-toan" className="btn btn-outline-danger thanh-toan">Thanh toán</NavLink>
                </div>

            </div>


        </>
    );
}
export default Cart;