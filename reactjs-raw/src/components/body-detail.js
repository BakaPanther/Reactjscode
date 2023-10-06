import { Col, Container, Row, Toast, ToastHeader, ToastBody, Input, Button, Alert } from "reactstrap";


function BodyDetail() {
    return (
        <>
            <Container className="body-detail">
                <Row>
                    <Col xs="4">
                        <img className="detail-img"
                            alt="Sample"
                            src="images/chuotg102.jpg"
                        />
                    </Col>
                    <Col xs="6">
                        <div className="name-product">
                            <h3>Chuột logitec g102</h3>
                        </div>
                        <div className="p-3 bg-warning my-2 ">
                            <Toast>
                                <ToastHeader>
                                    Giá sốc
                                </ToastHeader>
                                <ToastBody>
                                    400.000đ
                                </ToastBody>
                            </Toast>
                        </div>
                        <div className="so-luong">
                            <Row>
                                <Col xs="2">
                                    Số lượng:
                                </Col>
                                <Col xs="2">
                                    <Input type="number" ></Input>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Button color="info">
                                Thêm vào giỏ hàng
                            </Button>
                            <Button color="warning">
                                Mua ngay
                            </Button>
                        </div>
                    </Col>
                </Row>
                <Alert color="dark">
                    Thông tin sản phẩm
                </Alert>
                <div>
                    Dù có mức giá rất bình dân nhưng chuột Logitech G102 Lightsync RGB lại được trang bị led  RGB 16,8 triệu màu .Chọn một màu hay trộn 3 màu, hiệu ứng có sẵn hay tạo hiệu ứng của riêng bạn . Sự lựa chọn là của bạn ! Bạn còn có thể đồng bộ chuột với thiết bị LIGHTSYNC của Logitech G khác giúp góc máy trở nên đồng bộ và độc đáo hơn.

                    Cảm biến cấp độ chơi game
                    Theo dõi con trỏ chính xác và đạt hiệu suất phản hồi nhanh nhạy nhờ vào cảm biến cấp độ chơi game. Với độ nhạy có thể tùy chỉnh từ 200 - 8.000 DPI cùng feet chuột chất lượng, hãy chọn mức độ phù hợp với sở thích chơi của bạn. Sử dụng phần mềm HUB G của Logitech để lập trình lên tới 5 chế độ thiết lập sẵn.
                </div>
            </Container>
        </>
    );
}
export default BodyDetail;