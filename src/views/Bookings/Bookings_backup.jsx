// import React, { useEffect, useState } from "react";
// import MainContainer from "../../components/MainContainer/MainContainer";

// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchBookings,
//   selectBookings,
// } from "../../features/bookings/bookingsSlice";

// import { Table, TableTitle } from "../../components/Blocks/TableBlocks";

// import BookingNavigation from "../../components/Blocks/BookingNavigation";
// import BookingsRow from "../../components/Blocks/BookingsRow";

// // INICIO Componentes a luego separar a otro archivo

// import styled from "styled-components";

// export const ListButtonsContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 30px;
// `;

// export const Selectors = styled.div`
//   display: flex;
//   align-items: center;
// `;

// export const Selector = styled.button`
//   border: none;
//   color: var(--color-grey6E);
//   font-family: var(--font-main);
//   background-color: transparent;
//   height: 37px;
//   display: flex;
//   align-items: flex-start;
//   padding: 0 25px;
//   border-bottom: 1px solid var(--color-greyD4);

//   :hover {
//     font-weight: 700;
//     color: var(--color-greenDark);
//     border-bottom: 2px solid var(--color-greenDark);
//   }
// `;

// export const NewBtnsContainer = styled.div`
//   display: flex;
// `;

// // FIN Componentes a luego separar a otro archivo

// const Bookings = () => {
//   const dispatch = useDispatch();
//   const bookingsResult = useSelector(selectBookings);

//   useEffect(() => {
//     dispatch(fetchBookings());
//   }, [dispatch]);

//   return (
//     <MainContainer>
//       <BookingNavigation
//         n1="All Bookings"
//         n2="Checking In"
//         n3="Checking Out"
//         n4="In Progress"
//         select="01/11/2022 - 30/11/2022"
//       ></BookingNavigation>
//       <ListButtonsContainer>
//         <Selectors>
//           <Selector onClick={()=> {setAllBookings()}}> All Bookings </Selector>
//           <Selector onClick={()=> {setAllBookings()}}> All Bookings </Selector>
//         </Selectors>
//       </ListButtonsContainer>

//       <Table>
//         <thead>
//           <tr>
//             <TableTitle>Guest</TableTitle>
//             <TableTitle>Order Date</TableTitle>
//             <TableTitle>Check In</TableTitle>
//             <TableTitle>Check Out</TableTitle>
//             <TableTitle>Special Request</TableTitle>
//             <TableTitle>Room Type</TableTitle>
//             <TableTitle>Status</TableTitle>
//           </tr>
//         </thead>

//         <tbody>
//           {bookingsResult.map((guest) => (
//             <BookingsRow key={guest.id} guest={guest} />
//           ))}
//         </tbody>
//       </Table>
//     </MainContainer>
//   );
// };

// export default Bookings;
