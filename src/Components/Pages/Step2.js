import { MainContainer } from '../MainContainer';
import Typography from '@material-ui/core/Typography';
import { Form } from '../Form';
import { Input } from '../Input';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { PrimaryButton } from '../PrimaryButton';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Email should have correct format')
    .required('Email is a required field'),
});

export const Step2 = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ mode: 'onBlur', resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    navigate('/step3');
  };

  return (
    <MainContainer>
      <Typography component='h2' variant='h5'>
        🦄 Step 2
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('email')}
          id='email'
          type='email'
          label='Email'
          name='email'
          required
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
