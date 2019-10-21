import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import * as Yup from 'yup';

import { Container, Content } from './styles';
import { updateProfileRequest } from '../../store/modules/user/actions';

const schema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string()
    .email()
    .required('E-mail is required'),
  oldPassword: Yup.string(),
  password: Yup.string().when('oldPassword', (oldPassword, field) =>
    // field é o próprio password
    oldPassword ? field.min(6).required('New password is required') : field
  ),
  confirmPassword: Yup.string().when('password', (password, field) =>
    password
      ? field
          .required()
          .oneOf([Yup.ref('password')], 'Passwords does not match')
      : field
  ),
});

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  async function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Content>
        <Form schema={schema} initialData={profile} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Your name" />
          <Input name="email" type="email" placeholder="Your e-mail" />
          <hr />
          <Input
            name="oldPassword"
            type="password"
            placeholder="Your password"
          />
          <Input name="password" type="password" placeholder="New password" />
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirm new password"
          />
          <div>
            <button type="submit">
              <MdAddCircleOutline />
              <span>Save profile</span>
            </button>
          </div>
        </Form>
      </Content>
    </Container>
  );
}
