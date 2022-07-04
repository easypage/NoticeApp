import { useState } from "react";
import styled from "styled-components";
import { ko } from "date-fns/esm/locale";
import DatePicker from "react-datepicker"; // DatePicker 라는 컴포넌트도 가져오깅
import "react-datepicker/dist/react-datepicker.css"; // 스타일 맥이기
import CheckBox from "../common/CheckBox";
import axios from "axios";

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

  const [date, setdate] = useState(new Date());
  const [state, setstate] = useState("");
  const [name, setname] = useState("");
  const [title, settitle] = useState("");
  const [reason, setfcreason] = useState("");
  const [privateReson, setprivates] = useState(false);

  const checkOnlyOne = (checkThis) => {
    const checkboxes = document.getElementsByName("state");

    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== checkThis) {
        checkboxes[i].checked = false;
      }
    }
  };

  const setstateHandler = (e) => {
    checkOnlyOne(e.target);

    setstate(e.target.value);
  };

  const setnameHandler = (e) => {
    e.preventDefault();
    setname(e.target.value);
    console.log(e.target.value);
  };

  const fcTitleHandler = (e) => {
    e.preventDefault();
    settitle(e.target.value);
  };

  const fcReasonHandler = (e) => {
    e.preventDefault();
    setfcreason(e.target.value);
  };

  const fcReasonHiddenHandler = (e) => {
    e.preventDefault();
    if (e.target.value === "on") {
      setprivates(true);
    } else {
      setprivates(false);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // state에 저장한 값을 가져옵니다.

    let body = {
      name: name,
      state: state,
      title: title,
      reason: reason,
      privateReason: privateReson,

      date:
        date.getFullYear() +
        "-" +
        (date.getMonth() + 1) +
        "-" +
        +date.getDate(),
    };

    console.log(date);

    const res = await axios
      .post(
        "https://attendancechecknotice.herokuapp.com/calender",
        JSON.stringify(body),
        {
          headers: {
            "Content-Type": `application/json`,
          },
        }
      )
      .then((res) => {
        console.log(res);
      });

    /* 데이터 전송 후 입력창 close & 입력값 초기화 */
    setIsOpen(!isOpen);
    setdate("");
    setstate("");
    setname("");
    settitle("");
    setfcreason("");
    setprivates();
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
                  <h1>일정 </h1>
                  <form onSubmit={submitHandler}>
                    <ul>
                      <li>
                        <select
                          name="name"
                          value={name}
                          onChange={setnameHandler}
                        >
                          <option value="">이름</option>
                          <option value="이승제">이승제</option>
                          <option value="김병민">김병민</option>
                        </select>
                      </li>
                      <li>
                        <MyDatePicker
                          id="date"
                          locale={ko}
                          dateFormat="yyyy-MM-dd" // 날짜 형식
                          onChange={(date2) => {
                            setdate(date2);
                            console.log(date2);
                          }}
                          selected={date}
                          // onChange={(date) => setdate(date)}

                          placeholderText="Click to select a date"
                        />
                      </li>
                      <li>
                        상태 : 지각
                        <input
                          type="checkbox"
                          name="state"
                          id="state"
                          value={"지각"}
                          onChange={setstateHandler}
                        />
                        결석
                        <input
                          type="checkbox"
                          name="state"
                          id="state"
                          value={"결석"}
                          onChange={setstateHandler}
                        />
                        조퇴
                        <input
                          type="checkbox"
                          name="state"
                          id="state"
                          value={"조퇴"}
                          onChange={setstateHandler}
                        />
                      </li>
                      <li>
                        <p className="pame">사유 </p>
                        <input
                          type="text"
                          name="reason"
                          id="reason"
                          onChange={fcReasonHandler}
                        />
                      </li>
                      <li>
                        <p className="pame">사유 공개설정 </p>
                        <input
                          type="checkbox"
                          name="private"
                          id="private"
                          onChange={fcReasonHiddenHandler}
                        />
                        비공개
                      </li>
                      <li>
                        <p className="pame">제목 :</p>
                        <input
                          type="text"
                          name="title"
                          id="title"
                          onChange={fcTitleHandler}
                          value={title}
                        />
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
