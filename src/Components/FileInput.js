import Dropzone from 'react-dropzone';
import { Controller } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CloudUpload from '@material-ui/icons/CloudUpload';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InsertDriveFile from '@material-ui/icons/InsertDriveFile';

//! Controller позволяє працювати з компонентами які не надають API через ref. Тобто там де ref получити неможливо і треба керувати ними вручну
//! getRootProps, getInputProps - це спеціальні функції які дозволяють пропси отримати для самого імпута, а getInputProps - для елемента який має реагувати (тобто той елемент що зображає себе як дропзона куди можна скидувати файли )

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#eee',
    textAlign: 'center',
    cursor: 'pointer',
    color: '#333',
    padding: '10px',
    marginTop: '20px',
  },
  icon: {
    marginTop: '16px',
    color: '#888888',
    fontSize: '42px',
  },
}));

export const FileInput = ({ control, name }) => {
  const styles = useStyles();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={[]}
      render={({ field: { onChange, onBlur, value } }) => (
        <>
          <Dropzone onDrop={onChange}>
            {({ getRootProps, getInputProps }) => (
              <Paper
                variant='outlined'
                className={styles.root}
                {...getRootProps()}
              >
                <CloudUpload className={styles.icon} />
                <input {...getInputProps()} name={name} onBlur={onBlur} />
                <p>Drag 'n' drop files here, or click to select files</p>
              </Paper>
            )}
          </Dropzone>
          <List>
            {value.map((f, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <InsertDriveFile />
                </ListItemIcon>
                <ListItemText primary={f.name} secondary={f.size} />
              </ListItem>
            ))}
          </List>
        </>
      )}
    />
  );
};
