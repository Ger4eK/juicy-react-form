import { Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { Form } from './Components/Form';
import { Input } from './Components/Input';
import { MainContainer } from './Components/MainContainer';
import { PrimaryButton } from './Components/PrimaryButton';

export const Step1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  return (
    <MainContainer>
      <Typography component='h2' variant='h5'>
        🦄 Step 1
      </Typography>
      <Form>
        <Input
          ref={register('fistName')}
          id='firstName'
          type='text'
          label='First Name'
          name='firstName'
        />
        <Input
          ref={register('lastName')}
          id='lastName'
          type='text'
          label='Last Name'
          name='lastName'
        />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
