import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Container, Content, Info, Profile } from './styles';
import logo from '../../assets/logo.svg';
import { signOut } from '../../store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <Container>
      <Content>
        <Link to="/mymeetups">
          <img src={logo} alt="logoMeetApp" />
        </Link>
        <Info>
          <Profile>
            <p>Djanilson Martins</p>
            <Link to="/profile">My profile</Link>
          </Profile>
          <button type="button" onClick={handleSignOut}>
            Logout
          </button>
        </Info>
      </Content>
    </Container>
  );
}
