import React, { useEffect } from "react";
import * as d3 from "d3";

import InsightsCards from "../../components/InsightsCards/InsightsCards";
import Reviews from "../../components/Reviews/Reviews";
import MainContainer from "../../components/MainContainer/MainContainer";
// import ReservationsStats from "../../components/ReservationStats/ReservationsStats";

import {
  InsightsCardsContainer,
  ReviewsContainer,
  GeneralInsigths
} from "./Dashboard_sc";

import { BiBed } from 'react-icons/bi';
import { AiOutlineCalendar } from 'react-icons/ai';
import { IoMdExit } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import Calendar from "../../components/Calendar/Calendar";
import Stats from "../../components/ReservationStats/Stats";



const Dashboard = () => {

  useEffect(()=> {
    d3.select('.target').style('stroke-width', 5)
  },[]);

  let description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'

  return (
    <>
      <MainContainer>
        {/* <DashBoardContainer> */}
          <InsightsCardsContainer>
            <InsightsCards icon={<BiBed style={{width:'50', height: '50'}}/>}  number='8,461' title='New Booking'/>
            <InsightsCards icon={<AiOutlineCalendar style={{width:'50', height: '50'}}/>} number='963' title='Scheduled Room'/>
            <InsightsCards icon={<IoMdExit style={{width:'50', height: '50'}} />} number='753' title='Check In'/>
            <InsightsCards icon={<BiLogOut style={{width:'50', height: '50'}} />} number='516' title='Check Out'/>
          </InsightsCardsContainer>
          <GeneralInsigths>
            <Stats/>
            {/* <ReservationStats2 /> */}
            {/* <Calendar /> */}
          </GeneralInsigths>
          <ReviewsContainer>
            <Reviews description={description} name={'Kusnaidi Anderson'} time='4m ago' />
            <Reviews description={description} name={'Bella Saphira'} time='4m ago' />
            <Reviews description={description} name={'Thomas Al-Ghazali'} time='4m ago' />
          </ReviewsContainer>
        {/* </DashBoardContainer> */}
      </MainContainer>
    </>
  );
};

export default Dashboard;
