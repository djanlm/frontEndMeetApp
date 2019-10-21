import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';

import BannerInput from './BannerInput';
import { Container } from './styles';
import api from '../../services/api';

export default function Create_edit({ match }) {
  const [meetups, setMeetups] = useState([]);
  const [meetupExist, setMeetupExist] = useState(false);
  const [editMeetup, setEditMeetup] = useState({});
  const { meetupId } = match.params;

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('mymeetups');
      setMeetups(response.data);
    }

    loadMeetups();
  }, []);

  useEffect(() => {
    const findMeetup = meetups.find(m => {
      return meetupId === String(m.id);
    });
    if (findMeetup) {
      setMeetupExist(true);
      setEditMeetup(findMeetup);
    } else {
      setMeetupExist(false);
      setEditMeetup({});
    }
  }, [meetupId, meetups]);

  const url = meetups.map(m => {
    return m.banner.url;
  });

  const index = meetups.findIndex(m => meetupId === String(m.id));

  function handleClick() {}

  return (
    <Container>
      <Form initialData={editMeetup}>
        <BannerInput
          name="file_id"
          urlBanner={url[index]}
          meetupExist={meetupExist}
        />
        <Input name="title" placeholder="Meetup title" />
        <Input
          multiline
          name="description"
          type="text"
          placeholder="Meetup description"
        />
        <Input name="date" placeholder="Meetup date" />
        <Input name="location" placeholder="Meetup location" />
      </Form>
      <button type="button" onClick={handleClick}>
        <MdAddCircleOutline size="20" /> <span>New meetup</span>
      </button>
    </Container>
  );
}
