import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import styled from "styled-components";
import { calendarColors } from "../../styles/calendarColors";

const CalendarContainer = styled.div`
  min-width: 600px;
  background-color: ${calendarColors.white};
  margin-top: 50px;
  border-radius: 20px;
  padding: 41px;
  display: inline-block;
  flex: 1;
  font-family: "Poppins", sans-serif;
  box-shadow: 0px 5px 8px #00000028;
  :hover {
    box-shadow: 0px 7px 20px #00000048;
  }
  .fc .fc-toolbar-title {
    color: ${calendarColors.red};
    font-size: 25px;
  }
  .fc .fc-button-primary {
    background-color: ${calendarColors.hardGreen};
    border-radius: 10px;
    border: 1px solid ${calendarColors.hardGreen};
    font-size: 14px;
    font-weight: 600;
  }
  .fc .fc-button-primary:disabled {
    background-color: ${calendarColors.hardGreen};
  }
  .fc .fc-button:disabled {
    opacity: 1;
  }
  .fc .fc-button:hover {
    background-color: ${calendarColors.lightGreen};
    opacity: 1;
    color: ${calendarColors.hardGreen};
    border: 1px solid ${calendarColors.hardGreen};
  }
  .fc .fc-daygrid-day.fc-day-today {
    background-color: ${calendarColors.lightRed};
    color: ${calendarColors.hardGreen};
    border-radius: 8px;
  }
  .fc .fc-daygrid-day.fc-day-today:hover {
    background-color: ${calendarColors.redLess};
    color: white;
  }
  .fc .fc-daygrid-day-number {
    color: ${calendarColors.green};
  }
  .fc .fc-scroller-harness {
    color: ${calendarColors.hardGreen};
  }
  .fc .fc-view-harness {
    height: 500px;
  }
  .fc .fc-scrollgrid-liquid {
    border-radius: 12px;
    border: 1px solid ${calendarColors.lightRed};
  }
  .fc-theme-standard td,
  .fc-theme-standard th,
  .fc-theme-standard,
  .fc-scrollgrid {
    border: 9px;
  }
  .fc .fc-daygrid-day-top {
    justify-content: start;
    padding: 0 20px;
    margin: 5px;
  }
  .fc-daygrid-day .fc-day .fc-day-sun .fc-day-past {
    background-color: ${calendarColors.lightViolet};
  }
`;

function Calendar() {
  return (
    <>
      <CalendarContainer>
        <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
      </CalendarContainer>
    </>
  );
}

export default Calendar;
