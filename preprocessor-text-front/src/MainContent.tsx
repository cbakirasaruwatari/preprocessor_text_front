import React from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import {
  Badge,
  CircularProgress,
  Paper,
  Button,
  Fab,
  Grid
} from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import ShareIcon from '@material-ui/icons/Share';
import ListAlt from '@material-ui/icons/ListAlt';
import PersonAdd from '@material-ui/icons/PersonAdd';
import Lock from '@material-ui/icons/Lock';
import Chat from '@material-ui/icons/Chat';
import Assessment from '@material-ui/icons/Assessment';
import CloudUpload from '@material-ui/icons/CloudUpload';
import AssignmentTurnedIn from '@material-ui/icons/AssignmentTurnedIn';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: '10px',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      '& > *': {
        margin: theme.spacing(3),
      },
    },
  }),
);

type Props = {
  input: string;
};
const MainContent: React.FC<Props> = (props) => {

    // const aaa = fetch("")
    //   .then(response => {
    //     return response.json();
    //   })

  // CSSを適用する。
  const classes = useStyles();

  return (
        <Grid container className={classes.root} spacing={3}>
        </Grid>
  );
}

export default MainContent;