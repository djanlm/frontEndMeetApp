import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Info, Profile } from './styles';
import logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="logoMeetApp" />

        <Info>
          <Profile>
            <p>Djanilson Martins</p>
            <Link to="/profile">My profile</Link>
          </Profile>
          <button type="button">Logout</button>
        </Info>
      </Content>
    </Container>
  );
}
