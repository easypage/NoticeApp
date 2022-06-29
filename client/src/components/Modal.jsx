import { useState } from "react";
import styled from "styled-components";
import { ko } from "date-fns/esm/locale";
import DatePicker from "react-datepicker"; // DatePicker 라는 컴포넌트도 가져오깅
import "react-datepicker/dist/react-datepicker.css"; // 스타일 맥이기
import { axios } from "axios";

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
`;

export const MyDatePicker = styled(DatePicker)`
  width: 90%;
  height: 3rem;
  font-size: 1.6rem;
  font-weight: bold;
  background-color: transparent;
  color: black;
  border: 1px solid;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const ModalBtn = styled.button`
  background-color: #4000c7;
  font-size: 20px;
  text-decoration: none;
  border: none;
  padding: 15px;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  cursor: grab;
  position: relative;
  top: 0px;
  left: 510px;
  z-index: 1;
`;

export const ModalView = styled.div.attrs((props) => ({
  role: "dialog",
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 800px;
  height: 600px;
  border-radius: 1rem;
  position: relative;
  > .close-btn {
    position: absolute;
    font-size: 75px;
    top: -90px;
    right: 30px;
    cursor: pointer;
  }
`;
export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false); //isOpen 상태를 만들어준다.
  const openModalHandler = (event) => {
    setIsOpen(!isOpen);
  };

  const [startDate, setStartDate] = useState(new Date());
  const [state, setstate] = useState();
  const [fctitle, setfcTitle] = useState("");
  const [fcReason, setfcReason] = useState("");
  const [fcReasonHidden, setfcReasonHidden] = useState("");

  const setstateHandler = (e) => {
    e.preventDefault();
    setstate(e.target.value);
  };

  const fcTitleHandler = (e) => {
    e.preventDefault();
    setfcTitle(e.target.value);
  };

  const fcReasonHandler = (e) => {
    e.preventDefault();
    setfcReason(e.target.value);
  };

  const fcReasonHiddenHandler = (e) => {
    e.preventDefault();
    setfcReasonHidden(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // state에 저장한 값을 가져옵니다.

    let body = {
      fctitle: fctitle,
      fcReason: fcReason,
      fcReasonHidden: fcReasonHidden,
      state: state,
      startDate:
        startDate.getFullYear() +
        "-" +
        startDate.getMonth() +
        "-" +
        startDate.getDay(),
    };
    console.log(body);
  };

  return (
    <>
      <ModalContainer>
        <ModalBtn onClick={openModalHandler}>{isOpen ? "+" : "+"}</ModalBtn>

        {isOpen ? (
          <ModalBackdrop onClick={openModalHandler}>
            <ModalView
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              <div className="close-btn" onClick={openModalHandler}>
                <p>x</p>
              </div>
              <div className="fc-wrapper">
                <div className="fc-content">
                  <h1>일정</h1>
                  <form onSubmit={submitHandler}>
                    <ul>
                      <li>
                        <MyDatePicker
                          id="mydp"
                          locale={ko}
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          dateFormat="yyyy-MM-dd" // 날짜 형식
                          placeholderText="Click to select a date"
                        />
                      </li>

                      <li>
                        <p className="pame">제목 :</p>
                        <input
                          type="text"
                          name="fcTitle"
                          id="fcTitle"
                          onChange={fcTitleHandler}
                          value={fctitle}
                        />
                      </li>
                      <li>
                        <p className="pame">사유 :</p>
                        <input
                          type="text"
                          name="fcReason"
                          id="fcReason"
                          onChange={fcReasonHandler}
                        />
                      </li>
                      <li>
                        상태 : 지각
                        <input
                          type="checkbox"
                          name="state"
                          id="tadry"
                          value={"지각"}
                          onChange={setstateHandler}
                        />
                        결석
                        <input
                          type="checkbox"
                          name="state"
                          id="absent"
                          value={"결석"}
                          onChange={setstateHandler}
                        />
                        조퇴
                        <input
                          type="checkbox"
                          name="state "
                          id="early-departure"
                          value={"조퇴"}
                          onChange={setstateHandler}
                        />
                      </li>
                      <li>
                        <p className="pame">사유 비공개 :</p>
                        <input
                          type="checkbox"
                          name="fcReasonHidden"
                          id="fcReasonHidden"
                          onChange={fcReasonHiddenHandler}
                          value={"비공개"}
                        />
                        비공개
                      </li>

                      <button type="submit" className="insertButton">
                        등록
                      </button>
                    </ul>
                  </form>
                </div>
              </div>
            </ModalView>
          </ModalBackdrop>
        ) : null}
      </ModalContainer>
    </>
  );
};
