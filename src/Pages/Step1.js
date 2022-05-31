import Typography from '@material-ui/core/Typography';
import { useForm } from 'react-hook-form';
import { Form } from '../Components/Form';
import { Input } from '../Components/Input';
import { MainContainer } from '../Components/MainContainer';
import { PrimaryButton } from '../Components/PrimaryButton';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'First name should not contain numbers')
    .required('First name is a required field'),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'Last name should not contain numbers')
    .required('Last name is a required field'),
});

export const Step1 = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur', resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    navigate('/step2')
  };

  return (
    <MainContainer>
      <Typography component='h2' variant='h5'>
        🦄 Step 1
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('firstName')}
          id='firstName'
          type='text'
          label='First Name'
          name='firstName'
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
        />
        <Input
          {...register('lastName')}
          id='lastName'
          type='text'
          label='Last Name'
          name='lastName'
          error={!!errors.lastName}
          helperText={errors?.lastName?.message}
        />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
