import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


import logo from '../logo.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },

    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
  }),
);

export default function HeaderComponent(props: any) {

  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <img src={logo} alt="logo" width="100"/>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton color="inherit">
              {props.cart ? 
                <Badge badgeContent={props.cart.length} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              :(
                <ShoppingCartIcon />
              )}
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}