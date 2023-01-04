import classes from './User.module.css';
import { Component } from 'react';

class User extends Component {
  componentWillUnmount(){
    console.log('User will Unmount')
  }
  render(){
    return <li className={classes.user}>{this.props.name}</li>;
  }
}
// Functional base component
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
