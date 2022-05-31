import { useForm } from 'react-hook-form';
import { FileInput } from '../Components/FileInput';
import { Form } from '../Components/Form';
import { MainContainer } from '../Components/MainContainer';
import Typography from '@material-ui/core/Typography';
import { PrimaryButton } from '../Components/PrimaryButton';
import { useNavigate } from 'react-router-dom';

export const Step3 = () => {
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    navigate('/result');
  };

  return (
    <MainContainer>
      <Typography component='h2' variant='h5'>
        🦄 Step 3
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FileInput name='files' control={control} />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
