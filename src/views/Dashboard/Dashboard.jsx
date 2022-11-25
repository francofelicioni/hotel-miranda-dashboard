import React from "react";




import InsightsCards from "../../components/InsightsCards/InsightsCards";
import Reviews from "../../components/Reviews/Reviews";
import MainContainer from "../../components/MainContainer/MainContainer";

import {
  DashBoardContainer,
  InsightsCardsContainer,
  ReviewsContainer,
  GeneralInsigths
} from "./Dashboard_sc";

import { BiBed } from 'react-icons/bi';
import { AiOutlineCalendar } from 'react-icons/ai';
import { IoMdExit } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';


const Dashboard = () => {

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
          <GeneralInsigths></GeneralInsigths>
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
