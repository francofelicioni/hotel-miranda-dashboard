import React, { useEffect } from "react";
import * as d3 from "d3";

import InsightsCards from "../../components/InsightsCards/InsightsCards";
import MainContainer from "../../components/MainContainer/MainContainer";

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
import ReservationsStats from "../../components/ReservationStats/ReservationsStats";
import ReviewsSlider from "../../components/Reviews/Reviews_slider";



const Dashboard = () => {

  useEffect(()=> {
    d3.select('.target').style('stroke-width', 5)
  },[]);

  return (
    <>
      <MainContainer>
          <InsightsCardsContainer>
            <InsightsCards icon={<BiBed style={{width:'50', height: '50'}}/>}  number='8,461' title='New Booking'/>
            <InsightsCards icon={<AiOutlineCalendar style={{width:'50', height: '50'}}/>} number='963' title='Scheduled Room'/>
            <InsightsCards icon={<IoMdExit style={{width:'50', height: '50'}} />} number='753' title='Check In'/>
            <InsightsCards icon={<BiLogOut style={{width:'50', height: '50'}} />} number='516' title='Check Out'/>
          </InsightsCardsContainer>
          <GeneralInsigths>
            <ReservationsStats />
            <Calendar />
          </GeneralInsigths>
          <ReviewsContainer>
            <ReviewsSlider />
          </ReviewsContainer>
      </MainContainer>
    </>
  );
};

export default Dashboard;
