import styled from 'styled-components';
import StyledBtn from '../ReuseableComponents/Button';
import { FaPaperPlane } from 'react-icons/fa';
import background from '../assets/NewsletterBackGround.svg';
import { useState } from 'react';

const Container = styled.section`
  margin: 20px auto;
  border-radius: 30px;
  padding: 25px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: url(${({ background }) => background});
  background-position: center;
  background-repeat: no-repeat;
  /* background-size: cover; */
  text-align: center;

  @media (min-width: 768px) {
    padding: 75px;
  }
`;
const Header = styled.h1`
  font-size: 40px;
  line-height: 40px;
`;
const SubHeader = styled.p`
  font-size: 15px;
  margin: 16px auto 40px auto;
  color: #5b5f62;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #fff;
  border-radius: 12px;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;
const Input = styled.input`
  border: none;
  width: 100%;
  @media (min-width: 768px) {
    width: 70%;
  }
  &:focus {
    outline: none;
    border: none;
  }
`;
const Alert = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 15px;
  color: #32bb32;

  @media (min-width: 768px) {
    font-size: 25px;
  }
`;
function NewsLetter() {
  const [formValue, setFormValue] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const updateValue = (event) => {
    const value = event.target.value;
    setFormValue(value);
  };
  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const email = formValue;
    if (validateEmail(email)) {
      setFormValue('');
      setSuccessMessage(
        `you have successfully subscribed to our newsletter with the email:
        ${email}`
      );
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } else {
      console.log('not a valid email');
    }
  };
  return (
    <Container background={background}>
      <Header>Sign up to our newsletter</Header>
      <SubHeader>
        Receive latest news, update, and many other things every week.
      </SubHeader>
      <Form onSubmit={onSubmit}>
        <Input
          placeholder="Enter Your email address"
          type="email"
          value={formValue}
          onChange={(e) => {
            updateValue(e);
          }}
        />

        <StyledBtn
          width="40px"
          height="40px"
          radius="10px"
          color="#fff"
          background="#F66F4D"
          type="submit"
        >
          <FaPaperPlane />
        </StyledBtn>
      </Form>

      {successMessage && <Alert>{successMessage}</Alert>}
    </Container>
  );
}

export default NewsLetter;
