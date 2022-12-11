import { useEffect, useState } from "react";
import styled from "styled-components";
import { MdOutlineNavigateBefore, MdNavigateNext } from "react-icons/md";

const Container = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  color: var(--color-greenDark);
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  margin: 3rem;
  border-radius: 0.6rem;
  background: #ffffff;
  border: 1px solid green;
  box-shadow: 0 0.8rem 2rem rgba(#5a6181, 0.05);
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1.4rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;

const Navigation = ({
  info,
  pagesLength,
  setPagesLength,
  initialIndex,
  setInitialIndex,
}) => {
  const [itemsToShow, setItemsToShow] = useState(5);
  const [buttonsArray, setButtonsArray] = useState([]);

  useEffect(() => {
    //PREGUNTO SI MI INFO DEL FETCH VS CANTIDAD A MOSTRAR ES EXACTA
    if (info.length % itemsToShow === 0) {
      setPagesLength(info.length / itemsToShow);
    } else {
      setPagesLength(info.length / itemsToShow + 1);
    }
  }, [info]);

  useEffect(() => {
    const array = [];

    for (let index = 1; index <= pagesLength; index++) {
      array.push(index);
    }

    setButtonsArray(array);
  }, [pagesLength]);

  const changeIndex = (e) => {
    setInitialIndex(e.target.textContent * itemsToShow);

    let activeDot = document.querySelector(".active");

    activeDot.classList.remove("active");
    e.target.classList.add("active");
  };

  const increaseIndex = () => {
    if (initialIndex < info.length) {
      setInitialIndex(initialIndex + itemsToShow);
    } else {
      setInitialIndex(itemsToShow);
    }

    let btns = document.getElementsByClassName("btnPagination");

    for (let index = 0; index < btns.length; index++) {
      if (btns[index].classList.contains("active")) {
        if (index != btns.length - 1) {

          let activeDot = document.querySelector(".active");
          activeDot.classList.remove("active");
          btns[(index+1)].classList.add("active");

          return;
        } else {
          let activeDot = document.querySelector(".active");
          activeDot.classList.remove("active");
          btns[0].classList.add("active");
          return;
        }
      }
    }
  };

  const decreaseIndex = () => {
    if (initialIndex > itemsToShow) {
      setInitialIndex(initialIndex - itemsToShow);
    } else {
      if (info.length % itemsToShow !== 0) {
        setInitialIndex(
          parseInt(info.length / itemsToShow) * itemsToShow + itemsToShow
        );
        console.log(parseInt(info.length / itemsToShow));
      } else {
        setInitialIndex((info.length / itemsToShow) * itemsToShow);
      }
    }

    let btns = document.getElementsByClassName("btnPagination");

    for (let index = btns.length - 1; index >= 0; index--) {
      if (btns[index].classList.contains("active")) {
        if (index != 0) {

          let activeDot = document.querySelector(".active");
          activeDot.classList.remove("active");
          btns[(index-1)].classList.add("active");
          return;
        } else {
          let activeDot = document.querySelector(".active");
          activeDot.classList.remove("active");
          btns[btns.length-1].classList.add("active");
          return;
        }
      }
    }
  };

  return (
    <Container>
      <ButtonsContainer>
        <MdOutlineNavigateBefore
          onClick={decreaseIndex}
          style={{ width: "25px", height: "25px" }}
        />
        {buttonsArray.map((button, index) =>
          index === 0 ? (
            <Button
              key={`navBtn${index}`}
              className="active btnPagination"
              onClick={changeIndex}
            >
              {button}
            </Button>
          ) : (
            <Button
              key={`navBtn${index}`}
              className="btnPagination"
              onClick={changeIndex}
            >
              {button}
            </Button>
          )
        )}
        <MdNavigateNext
          onClick={increaseIndex}
          style={{ width: "25px", height: "25px" }}
        />
      </ButtonsContainer>
    </Container>
  );
};

export default Navigation;
