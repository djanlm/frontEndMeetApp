import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '../../assets/logo.svg';
// import { Container } from './styles';

export default function Signin() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="logo meetapp" />
      <Form onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Your e-mail" />
        <Input name="password" type="password" placeholder="Your password" />
        <button type="submit">Enter</button>
        <Link to="/register">Create free account</Link>
      </Form>
    </>
  );
}
