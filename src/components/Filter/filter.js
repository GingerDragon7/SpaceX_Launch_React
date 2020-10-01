import React from "react";
import {
  FiltersSection,
  GridAligner,
  FilterButton,
  SectionInfo,
  FilterType,
  SideBarHearder,
} from "../../styling";

const filterYears = [
  "2006",
  "2007",
  "2008",
  "2009",
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
];

const Filters = (props) => {
  const {
    handleYearFilter,
    handleStatusFilter,
    selectedYear,
    launchStatus,
    landStatus,
  } = props;
  return (
    <FiltersSection>
      <SideBarHearder>Filters</SideBarHearder>
      <FilterType>
        <SectionInfo>Launch Year</SectionInfo>
        <GridAligner onClick={handleYearFilter}>
          {filterYears.map((year) => (
            <FilterButton
              key={year}
              data-year={year}
              selected={selectedYear === year}
            >
              {year}
            </FilterButton>
          ))}
        </GridAligner>
      </FilterType>
      <FilterType>
        <SectionInfo>Successfull Launch</SectionInfo>
        <GridAligner>
          <FilterButton
            onClick={() => handleStatusFilter("launch", true)}
            selected={launchStatus}
          >
            True
          </FilterButton>
          <FilterButton
            onClick={() => handleStatusFilter("launch", false)}
            selected={launchStatus === false}
          >
            False
          </FilterButton>
        </GridAligner>
      </FilterType>
      <FilterType>
        <SectionInfo>Successfull Landing</SectionInfo>
        <GridAligner>
          <FilterButton
            onClick={() => handleStatusFilter("land", true)}
            selected={landStatus}
          >
            True
          </FilterButton>
          <FilterButton
            onClick={() => handleStatusFilter("land", false)}
            selected={landStatus === false}
          >
            False
          </FilterButton>
        </GridAligner>
      </FilterType>
    </FiltersSection>
  );
};

export default Filters;
