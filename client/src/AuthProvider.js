import React, { Component } from 'react';
import axios from 'axios';

const {
  Provider: AuthContextProvider,
  Consumer: AuthContext,
} = React.createContext();

class AuthProvider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      error: null,
      signIn: this.signIn,
      signOut: this.signOut,
    }
  }

  componentDidMount() {
    const token = window.localStorage.getItem('token');
    if (token) {
      axios.get('/api/me', {
        headers: {
          Authorization: `bearer ${token}`,
        }
      })
        .then(response => {
          const { user } = response.data;
          this.setState({ user });
        })
        .catch(err => {
          console.error(err);
          localStorage.removeItem('token');
        })
    }
  }

  signIn = ({ username, password }) => {
    // Implement me !
    axios.post('/auth/login', { username, password })
      .then(response => {
        const { user, token } = response.data;
        window.localStorage.setItem('token', token);
        this.setState({ user });
      })
      .catch(error => {
        console.error(error);
        this.setState({ error: 'Invalid username or password' });
      })
  }

  signOut = () => {
    // Implement me !
    localStorage.removeItem('token');
    window.location.reload();
  }

  render() {
    const { children } = this.props
    return (
      <AuthContextProvider value={this.state}>
        {children}
      </AuthContextProvider>
    )
  }
}

export { AuthContext };
export default AuthProvider;
