import { useState } from 'react';
import { useDispatch } from 'react-redux';
import actions from '../src/redux/actions';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(actions.authenticate({ email, password }, 'register'));
  };

  return (
    <form
      onSubmit={handleSubmit}
      
    >
      <div>
        <p>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <span>
            <i>email</i>
          </span>
        </p>
      </div>
      <div>
        <p>
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <span>
            <i>lock</i>
          </span>
        </p>
      </div>
      <div>
        <p>
          <button type="submit">
            Create account
          </button>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
