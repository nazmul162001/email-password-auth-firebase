import './App.css';
// import { getAuth } from 'firebase/auth';
// import app from './firebase.init';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

// const auth = getAuth(app);

function App() {
  const handleEmailBlur = (e) => {
    console.log(e.target.value);
  };
  // handle password submit
  const handlePasswordBlur = (e) => {
    console.log(e.target.value);
  };

  // handle form submit
  const handleFormSubmit = (e) => {
    console.log('e.target.value');
    e.preventDefault();
  };

  return (
    <div>
      <div className="registration w-50 mx-auto mt-5">
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" onBlur={handleEmailBlur} placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" onBlur={handlePasswordBlur} placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
