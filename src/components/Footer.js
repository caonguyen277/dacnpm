import React from "react";
import "../css/Footer.css";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className="phantom"></div>
      <section className="Footer">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-4">
                  <h6>Cơ quan chủ quản: Văn phòng Chính phủ</h6>
                </div>
                <div className="col-md-4">
                  <h6>ĐIỀU KHOẢNG SỬ DỤNG</h6>
                </div>
                <div className="col-md-4">
                  <h6>QUY ĐỊNH BẢO MẬT</h6>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row">
                <h6>
                  <FaPhoneAlt /> Tổng đài hỗ trợ: 18001096
                </h6>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12"></div>
            <p>
              © 2018 | Bản quyền thuộc Bộ Kế hoạch và Đầu tư
              <span className="px-5">
                Địa chỉ : 6B Hoàng Diệu, Quận Ba Đình, Hà Nội, Việt Nam{" "}
              </span>
              <span>Email : hotro@dangkykinhdoanh.gov.vn</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
