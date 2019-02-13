import Auth0Lock from 'auth0-lock';
const authDomain = 'azhalkouski.eu.auth0.com';
const clientId = 'QpzV4zDbcDH85mCRqlpxxQLg0irS3lKn';

class AuthService {
  constructor() {
    this.lock = new Auth0Lock(clientId, authDomain, {
      auth: {
        params: {
          scope: 'openid email'
        },
      },
    })

    this.showLock = this.showLock.bind(this);
    this.lock.on('authenticated', this.authProcess.bind(this));
  }

  authProcess = (authResult) => {
    console.log(authResult);
  }

  showLock() {
    this.lock.show();
  }

  setToken = (authFields) => {
    const {
      idToken,
      exp
    } = authFields;
    localStorage.setItem('idToken', idToken);
    localStorage.setItem('exp', exp * 1000);
  }

  isCurrent = () => {
    const expString = localStorage.getItem('exp');
    if (!expString) {
      localStorage.removeItem('idToken');
      return false;
    }

    const now = new Date();
    const exp = new Date(parseInt(expString, 10)); //10 is radix parameter
    if ( exp < now ) {
      this.logout();
      return false;
    } else {
      return true;
    }
  }

  getToken() {
    const idToken = localStorage.getItem('idToken');
    if (this.isCurrent() && idToken) {
      return idToken;
    } else {
      localStorage.removeItem('idToken');
      localStorage.removeItem('exp');
      return false;
    }
  }

  logout = () => {
    localStorage.removeItem('idToken');
    localStorage.removeItem('exp');
    location.reload();
  }

}

export default AuthService;
