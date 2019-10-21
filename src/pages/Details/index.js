import React from 'react';
import {
  MdModeEdit,
  MdDeleteForever,
  MdLocationOn,
  MdInsertInvitation,
} from 'react-icons/md';

import {
  Container,
  Content,
  Top,
  Title,
  Buttons,
  Image,
  Description,
  Info,
  Date,
  Place,
} from './styles';

export default function Details() {
  return (
    <Container>
      <Content>
        <Top>
          <Title>React-Native MeetUp</Title>
          <Buttons>
            <button id="edit" type="button">
              <MdModeEdit size="20px" />
              <span>Edit</span>
            </button>
            <button id="cancel" type="button">
              <MdDeleteForever size="20px" />
              <span>Cancel</span>
            </button>
          </Buttons>
        </Top>
        <Image>
          <img
            src="https://www.jvi.org/fileadmin/_processed_/0/a/csm_600B_ef09c869f8.jpg"
            alt="Banner meetup"
          />
        </Image>
        <Description>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </Description>
        <Info>
          <Date>
            <MdInsertInvitation />
            <span>24 de Junho, às 20h</span>
          </Date>
          <Place>
            <MdLocationOn />
            <span>136, 5th Avenue</span>
          </Place>
        </Info>
      </Content>
    </Container>
  );
}
