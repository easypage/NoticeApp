import React from "react";
import ModalFrame from "./ModalFrame";

const ProjectModal = ({ _handleModal }) => {
  return (
    <ModalFrame _handleModal={_handleModal}>
      <div className="fc-wrapper">
        <div className="fc-content">
          <h1>일정</h1>
          <ul>
            <li>
              <p className="pame">날짜 :</p>
              <input type="date" name="date" id="date" />
            </li>
            <li>
              <p className="pame">제목 :</p>
              <input type="text" name="fcTitle" id="fcTitle" />
            </li>
            <li>
              <p className="pame">사유 :</p>
              <input type="text" name="fcReason" id="fcReason" />
            </li>
            <li>
              상태 : 지각
              <input type="checkbox" name="tardy" id="tadry" value={"지각"} />
              결석
              <input type="checkbox" name="absent" id="absent" value={"결석"} />
              조퇴
              <input
                type="checkbox"
                name="early-departure"
                id="early-departure"
                value={"조퇴"}
              />
            </li>
            <li>
              <p className="pame">사유 비공개 :</p>
              <input type="text" name="fc-reason-hidden" id="fc-reason" />
            </li>

            <form className="insert-button">
              <button type="submit">등록</button>
            </form>
          </ul>
        </div>
      </div>
    </ModalFrame>
  );
};

export default ProjectModal;
