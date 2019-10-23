import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import { updateMeetupRequest } from '../../store/modules/meetup/actions';

import BannerInput from './BannerInput';
import { Container } from './styles';

const schema = Yup.object().shape({
  file_id: Yup.string().required('Image is required'),
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  date: Yup.string().required('Date is required'),
  location: Yup.string().required('Location is required'),
});

export default function Create_edit({ match }) {
  const dispatch = useDispatch();
  const { meetupId } = match.params;

  const meetup = useSelector(state => state.meetup.meetup);
  console.tron.log(meetup);
  /* useEffect(() => {
    if (meetup !== null) {
      if (meetupId !== String(meetup.id)) {
        dispatch(deleteMeetupStateRequest());
      }
    }
  }, [meetupId, meetup, dispatch]); */

  function handleSubmit(data) {
    data = { ...data, meetupId };
    dispatch(updateMeetupRequest(data));
  }

  return (
    <Container>
      <Form schema={schema} initialData={meetup} onSubmit={handleSubmit}>
        <BannerInput name="file_id" />
        <Input name="title" placeholder="Meetup title" />
        <Input
          multiline
          name="description"
          type="text"
          placeholder="Meetup description"
        />
        <Input name="date" placeholder="Date: YYYY-MM-DDTHH:MM:SS.000Z" />
        <Input name="location" placeholder="Meetup location" />
        <button type="submit">
          <MdAddCircleOutline size="20" /> <span>Save meetup</span>
        </button>
      </Form>
    </Container>
  );
}

Create_edit.propTypes = {
  match: PropTypes.element.isRequired,
};
