import React from "react";
import { Table } from "react-bootstrap";
const Contributions = () => {
  return (
    <>
      <section>
        <div className="container">
        <div className="col-md-12">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Họ và tên</th>
                  <th>Địa chỉ</th>
                  <th>Ngày sinh</th>
                  <th>Giới tính</th>
                  <th>Tóm tắt nội dung</th>
                  <th>Thời gian gửi</th>
                  <th>Chi tiết</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@fat</td>
                  <td>@fat</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@fat</td>
                  <td>@fat</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@fat</td>
                  <td>@fat</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@fat</td>
                  <td>@fat</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@fat</td>
                  <td>@fat</td>
                  <td>@fat</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contributions;
