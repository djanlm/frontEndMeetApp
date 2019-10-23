import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MdKeyboardArrowRight, MdAddCircleOutline } from 'react-icons/md';

import { format, parseISO } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

import api from '../../services/api';
import {
  editMeetupRequest,
  deleteMeetupStateRequest,
} from '../../store/modules/meetup/actions';

import { Container, Content, Top, List, ListElement } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('mymeetups');

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone; // fetchs the user time zone
      const pattern = "MMMM dd, 'at' HH'h'mm'm'";

      const data = response.data.map(meetup => {
        const zonedDate = utcToZonedTime(parseISO(meetup.date), timezone); // adapta a hora vinda de api pra o horário da time zone
        return {
          ...meetup,
          formattedDate: format(zonedDate, pattern, { timezone }),
        };
      });
      setMeetups(data);
    }

    loadMeetups();
  }, []);

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(deleteMeetupStateRequest());
  }

  function handleDetails(id) {
    dispatch(editMeetupRequest(id));
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
          {meetups.map(meetup => {
            return (
              <ListElement
                key={meetup.id}
                onClick={() => handleDetails(meetup.id)}
              >
                <strong>{meetup.title}</strong>
                <span>{meetup.formattedDate}</span>
                <MdKeyboardArrowRight size="30" color="#fff" />
              </ListElement>
            );
          })}
        </List>
      </Content>
    </Container>
  );
}
