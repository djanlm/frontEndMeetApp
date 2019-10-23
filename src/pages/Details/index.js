import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  MdModeEdit,
  MdDeleteForever,
  MdLocationOn,
  MdInsertInvitation,
} from 'react-icons/md';
// import {Link} from 'react-router-dom';
import history from '../../services/history';
import { deleteMeetupRequest } from '../../store/modules/meetup/actions';
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
  const meetup = useSelector(state => state.meetup.meetup);
  const dispatch = useDispatch();

  function handleEditClick() {
    history.push(`/edit/${meetup.id}`);
  }

  function handleDelete() {
    dispatch(deleteMeetupRequest(meetup.id));
  }
  if (meetup !== null) {
    return (
      <Container>
        <Content>
          <Top>
            <Title>{meetup.title}</Title>
            <Buttons>
              <button id="edit" type="button" onClick={handleEditClick}>
                <MdModeEdit size="20px" />
                <span>Edit</span>
              </button>
              <button id="cancel" type="button" onClick={handleDelete}>
                <MdDeleteForever size="20px" />
                <span>Cancel</span>
              </button>
            </Buttons>
          </Top>
          <Image>
            <img src={meetup.banner.url} alt="Banner meetup" />
          </Image>
          <Description>
            <p>{meetup.description}</p>
          </Description>
          <Info>
            <Date>
              <MdInsertInvitation />
              <span>{meetup.formattedDate}</span>
            </Date>
            <Place>
              <MdLocationOn />
              <span>{meetup.location}</span>
            </Place>
          </Info>
        </Content>
      </Container>
    );
  }
  return (
    <Container>
      <Content />
    </Container>
  );
}
