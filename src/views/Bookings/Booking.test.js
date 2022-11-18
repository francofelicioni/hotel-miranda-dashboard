import React from "react";
// import 'jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom";
import { NotesButton } from "./Bookings_sc";

afterEach(cleanup)

test('Render NotesButton', () => {
  render(
      <NotesButton />
  )
  const notesButtonClass = NotesButton().type.styledComponentId
  const NotesButtonRoots = document.getElementsByClassName(notesButtonClass)
  const style = window.getComputedStyle(NotesButtonRoots[0])

  expect(style.backgroundColor).toBe("#eef9f2");
})