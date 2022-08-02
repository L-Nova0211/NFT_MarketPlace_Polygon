import verifyToken from '../src/getInitialProps/verifyToken';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import actions from '../src/redux/actions';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(actions.authenticate({ email, password }, 'login'));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container"
      style={{ width: '540px' }}
    >
      <div className="field">
        <p className="control has-icons-left">
          <input
            className="input"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <span className="icon is-small is-left">
            <i className="material-icons md-dark md-inactive">email</i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control has-icons-left">
          <input
            className="input"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <span className="icon is-small is-left">
            <i className="material-icons md-dark md-inactive">password</i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control has-text-centered">
          <button type="submit" className="button is-success">
            Login
          </button>
        </p>
      </div>
    </form>
  );
};

// LoginPage.getInitialProps = function (ctx) {
//   verifyToken(ctx);
// };

export default LoginPage;
