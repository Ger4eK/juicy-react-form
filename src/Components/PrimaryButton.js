import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const PrimaryButton = ({ children, ...props }) => {
  const styles = useStyles();

  return (
    <Button
      type='submit'
      fullWidth
      variant='contained'
      color='primary'
      className={styles.root}
      {...props}
    >
      {children}
    </Button>
  );
};
