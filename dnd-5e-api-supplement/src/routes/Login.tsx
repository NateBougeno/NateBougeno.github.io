import * as React from 'react';


import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

import {withStyles} from '@material-ui/core/styles';

// import * as Cookies from 'es-cookie';

// const userData = require('../jsons/users.json')

// function loginCheck(user:string, pass:string, event:any){


//      Cookies.set('user', user);
// };

class LoginPage extends React.Component<LoginPage.Props, LoginPage.State> {
     constructor(props: LoginPage.Props){
          super(props);
     };

     state:LoginPage.State = {
          username: '',
          password: ''
     };

     handleUserChange = (event:any) => {
          this.setState({username: event.target.value});
     }

     handlePassChange = (event:any) =>{
          this.setState({password: event.target.value});
     }

     render() {
          let loggingIn = null;
          const { username, password } = this.state;
          const { classes } = this.props;


          return(
               <div className={classes.root}>
               <Grid container justify='center' alignItems='center' xs={3} sm={3} className={classes.grid}>
                    <Paper className={classes.paper}>
                         
                         {loggingIn === false &&
                              <p>Error: Invalid Username or Password</p>    
                         }
                         <br/> 
                         <TextField 
                              label='Username' 
                              value={username}
                              InputProps={{
                                   classes: {underline: classes.underline}
                              }} 
                              InputLabelProps={{
                                   shrink:true
                              }}
                              onChange={this.handleUserChange.bind(this)}/>
                         <br/>
                         <br/>
                         <TextField  
                              value={password}
                              label='Password' 
                              InputProps={{
                                   classes: {underline: classes.underline}
                              }} 
                              InputLabelProps={{
                                   shrink:true
                              }}
                              onChange={this.handlePassChange.bind(this)}/>
                         <br/>
                         <br/>
                         <Button className={classes.buttons}>
                              Login
                         </Button>
                         <Button className={classes.buttons}>
                              Register
                         </Button>
                    </Paper> 
               </Grid>
               </div>
          )
     }
}

namespace LoginPage {
     export interface Props {
          classes : any;
     }
     export interface State {
          username: string;
          password: string;
     }
     export const style:object = (theme:any) => ({
          grid:{
               float: 'center'
          },
          root: {
               flexGrow: 1,
               marginTop: '200px',
               marginLeft: '650px',
               float: 'center',
               width: '100%'
          },
          paper:{
               padding: theme.spacing.unit,
               textAlign: 'center',
               height: '100%'
          },
          buttons: {
               backgroundColor: 'gray',
               fontWeight: 'bold',
               display: 'inline-block',
               align: 'center',
               margin: theme.spacing.unit
          },
          underline:{
               '&:after':{
                    transform: 'none',
                    transition: 'disabled',
                    borderBottom: '1px solid black'
               },
               '&:before':{
                    transition: 'disabled'
               },
               '&&&&:hover:before': {
                    borderBottom: '1px solid black'
               }
          }
     })
}

export default withStyles(LoginPage.style)(LoginPage);