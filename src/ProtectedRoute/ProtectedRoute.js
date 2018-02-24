import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import axios from '../AxiosGlobal';


class ProtectedRoute extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      requested: true,
      success: null,
    };
  }

  componentDidMount() {
    let token = JSON.parse(localStorage.getItem('token'));
    axios.defaults.headers.common['Authorization'] = token;
    axios.get('/users/profile')
      .then((res) => {
        this.setState({ requested: false, success: true });
      })
      .catch((err) => {
        this.setState({ requested: false, success: false });
      })
  }

  render() {
    const { success, requested } = this.state;
    const Component = this.props.component;
    const location = this.props.location;

    if(requested) {
      return null;
    }

    if(success) {
      return <Route {...this.props} render={(rest) => (<Component {...rest} />)} />
    }
    return <Redirect to={{ pathname: '/sign_in', state: { from: location } }} />
  }
}

export default ProtectedRoute;