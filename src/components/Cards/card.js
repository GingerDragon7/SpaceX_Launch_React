import React from "react";
import {
  EventLogo,
  DetailWrapper,
  EventCard,
  EventImg,
  Name,
  MachineIds,
  DetailKey,
  EventDetails,
  DetailValue,
} from "../../styling";
import defaultImg from "../../assets/default.png";

const Card = (props) => {
  const {
    flight_number,
    mission_name,
    mission_id,
    launch_success,
    launch_date_local,
    rocket: {
      first_stage: {
        cores: [{ land_success }],
      },
    },
    links: { mission_patch_small },
  } = props.event;
  const { landStatus } = props;
  var year = new Date(launch_date_local).getFullYear();

  const verfiedLandStatus =
    typeof landStatus === "boolean"
      ? String(landStatus)
      : typeof land_success !== "boolean"
      ? "NA"
      : String(land_success);

  return (
    <EventCard>
      <EventLogo>
        <EventImg
          data-testid="logo"
          src={mission_patch_small ? mission_patch_small : defaultImg}
          alt=""
        />
      </EventLogo>
      <EventDetails>
        <Name data-testid="name">
          {mission_name} #{flight_number}
        </Name>
        <MachineIds>
          <DetailKey>Mission Ids:</DetailKey>
          <ul>
            {mission_id.map((id) => (
              <li key={id}>{id}</li>
            ))}
          </ul>
        </MachineIds>
        <DetailWrapper>
          <DetailKey>Launch Year: </DetailKey>
          <DetailValue data-testid="year">{year}</DetailValue>
        </DetailWrapper>
        <DetailWrapper>
          <DetailKey>Successull Launch: </DetailKey>
          <DetailValue>{String(launch_success)}</DetailValue>
        </DetailWrapper>
        <DetailWrapper>
          <DetailKey>Successfull Landing: </DetailKey>
          <DetailValue>{verfiedLandStatus}</DetailValue>
        </DetailWrapper>
      </EventDetails>
    </EventCard>
  );
};

export default Card;
