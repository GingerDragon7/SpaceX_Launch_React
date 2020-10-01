import React, { useEffect, useState } from "react";

import {
  AppContainer,
  Header,
  ViewSection,
  LaunchInfoSection,
  CardsContainer,
  SideBar,
  DetailKey,
  Footer,
} from "./styling";

import Card from "./components/Cards/card";
import Axios from "axios";
import Filters from "./components/Filter/filter";

const baseUrl = `https://api.spaceXdata.com/v3/launches?limit=100`;

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [programData, setProgramData] = useState([]);
  const [selectedYear, setYearFilter] = useState(null);
  const [launchStatus, setLaunchFilter] = useState(null);
  const [landStatus, setLandFilter] = useState(null);

  const handleStatusFilter = (type, status) => {
    if (type === "launch") {
      setLaunchFilter(status);
      return;
    }
    setLandFilter(status);
  };

  const handleYearFilter = (v) => {
    v.stopPropagation();
    const year = v.target.dataset.year;
    setYearFilter(year);
  };

  useEffect(() => {
    const updateData = async (filters) => {
      setIsLoading(true);
      const { data } = await Axios.get(baseUrl, {
        params: {
          launch_year: selectedYear,
          launch_success: launchStatus,
          land_success: landStatus,
          ...filters,
        },
      });
      setIsLoading(false);
      setProgramData(data);
    };
    updateData();
  }, [selectedYear, landStatus, launchStatus]);

  return (
    <AppContainer>
      <Header>SpaceX Launch Programs</Header>
      <ViewSection>
        <SideBar>
          <Filters
            handleYearFilter={handleYearFilter}
            selectedYear={selectedYear}
            handleStatusFilter={handleStatusFilter}
            launchStatus={launchStatus}
            landStatus={landStatus}
          />
        </SideBar>
        <LaunchInfoSection>
          {isLoading}
          <CardsContainer>
            {programData.map((event, i) => (
              <Card event={event} key={`event-${i}`} landStatus={landStatus} />
            ))}
          </CardsContainer>
        </LaunchInfoSection>
      </ViewSection>
      <Footer>
        <DetailKey>Developed By :</DetailKey> Shubham Bhadani
      </Footer>
    </AppContainer>
  );
}

export default App;
