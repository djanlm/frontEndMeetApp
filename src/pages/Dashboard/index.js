import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowRight, MdAddCircleOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import history from '../../services/history';

import { Container, Content, Top, List, ListElement } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('mymeetups');
      setMeetups(response.data);
    }

    loadMeetups();
  }, []);

  function handleClick() {
    history.push('/edit');
  }
  return (
    <Container>
      <Content>
        <Top>
          <strong>My meetups</strong>
          <button type="button" onClick={handleClick}>
            <MdAddCircleOutline size="20" /> <span>New meetup</span>
          </button>
        </Top>
        <List>
          {meetups.map(meetup => (
            <Link to="/details">
              <ListElement key={meetup.id}>
                <strong>{meetup.title}</strong>
                <span>24 de junho,às 20h</span>
                <MdKeyboardArrowRight size="30" color="#fff" />
              </ListElement>
            </Link>
          ))}
        </List>
      </Content>
    </Container>
  );
}
