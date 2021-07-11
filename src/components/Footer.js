import React from "react";
import "../css/footer.css";
function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-info">
        <div className="address-section">
          <h4>ayanac.</h4>
          <p>
            Nabapalli Pirtala, Ward-6, Arambagh, Hooghly, West Bengal Pin -
            712601
          </p>
          <p><i class="fas fa-phone-alt"></i> : +91-8670513195</p>
          <p><i class="fas fa-envelope"></i> : ayanchakraborty.inbox@gmail.com</p>
        </div>
        <div className="coding-handles">
            <h4>coding handles.</h4>
            <ul>
                <li>Hackerrank <i class="fab fa-hackerrank"></i> : </li>
                <li>Codechef : </li>
                <li>Codeforces : </li>
                <li>LeetCode : </li>
            </ul>
        </div>
      </div>
      <div className="copyright">
        <p>
          <i class="fas fa-copyright"></i> 2021 AYAN CHAKRABORTY
        </p>
        <p>All Rights Reserved.</p>
      </div>
    </div>
  );
}
export default Footer;
