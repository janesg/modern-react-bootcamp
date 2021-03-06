import React, { useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles/FormStyles";

import { LanguageContext } from "./contexts/LanguageContext";
import { translate as trn } from "./translations";

const Form = props => {
  const { classes } = props;
  const { language: lang, setLanguage } = useContext(LanguageContext);

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5'>{trn(lang, "login")}</Typography>
        <Select value={lang} onChange={e => setLanguage(e.target.value)}>
          <MenuItem value='en'>{trn(lang, "en")}</MenuItem>
          <MenuItem value='fr'>{trn(lang, "fr")}</MenuItem>
          <MenuItem value='sp'>{trn(lang, "sp")}</MenuItem>
        </Select>
        <form className={classes.form}>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='email'>{trn(lang, "email")}</InputLabel>
            <Input id='email' name='email' autoFocus />
          </FormControl>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='password'>{trn(lang, "password")}</InputLabel>
            <Input id='password' name='password' autoFocus />
          </FormControl>
          <FormControlLabel
            control={<Checkbox color='primary' />}
            label={trn(lang, "remember")}
          />
          <Button
            variant='contained'
            type='submit'
            fullWidth
            color='primary'
            className={classes.submit}
          >
            {trn(lang, "login", "upper")}
          </Button>
        </form>
      </Paper>
    </main>
  ); 
}

export default withStyles(styles)(Form);
