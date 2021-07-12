import React from "react";
import "../css/education.css";
function Education() {
  return (
    <div className="education-section" name="education">
    <h2>Education</h2>
    <div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="main-timeline">
                <div class="timeline">
                    <a href="#" class="timeline-content">
                        <div class="timeline-year">2019 - Present</div>
                        <h3 class="title">Kalinga Institute of Industrial Technology</h3>
                        <p class="description">
                            B.Tech in Computer Science and Engineering.
                            <br></br>Major in CSE.&emsp;Semester : 5th<br></br>
                            CGPA : 9.30
                        </p>
                    </a>
                </div>
                <div class="timeline">
                    <a href="#" class="timeline-content">
                        <div class="timeline-year">2016 - 2018</div>
                        <h3 class="title">Arambagh Vivekananda Academy</h3>
                        <p class="description">
                            Board : CBSE<br></br>
                            Senior-Secondary Exam : 87.2 %<br></br>
                            Secondary Exam : 10 CGPA
                        </p>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
	</div>
  );
}
export default Education;
