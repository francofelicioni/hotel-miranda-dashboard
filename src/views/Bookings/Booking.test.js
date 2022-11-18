import React from "react";
// import 'jest-dom/extend-expect'
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { NotesButton } from "./Bookings_sc";
import Bookings from "./Bookings";

afterEach(cleanup);

describe("Notes Testing", () => {
  test("Render NotesButton", () => {
    const { getAllByText } = render(<Bookings />);
    const buttons = getAllByText("View Notes");

    // render(
    //     <NotesButton />
    // )
    // const notesButtonClass = buttons().type.styledComponentId
    // const NotesButtonRoots = document.getElementsByClassName(notesButtonClass)
    // const style = window.getComputedStyle(NotesButtonRoots[0])

    // expect(style.backgroundColor).toBe("#eef9f2");
  });
});
