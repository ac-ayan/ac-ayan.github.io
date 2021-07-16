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
                <li>Hackerrank <i class="fab fa-hackerrank"></i> : <a href="https://www.hackerrank.com/ayanac1598">ayanac1598</a></li>
                <li>Codechef : <a href="https://www.codechef.com/users/ayanac">ayanac</a></li>
                <li>Codeforces : <a href="https://codeforces.com/profile/ayanac">ayanac</a></li>
                <li>LeetCode : <a href="https://leetcode.com/ayanac/">ayanac</a></li>
            </ul>
        </div>
      </div>
      <div className="copyright">
      <div className="social">
      <i class="fab fa-github"></i>
      <i class="fab fa-linkedin"></i>
      <i class="fab fa-twitter"></i>
      </div>
        <p>
          <i class="fas fa-copyright"></i> 2021 AYAN CHAKRABORTY
        </p>
        <p>All Rights Reserved.</p>
      </div>
    </div>
  );
}
export default Footer;
