import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { FcGoogle } from 'react-icons/fc';
import { VscGithub } from 'react-icons/vsc'


const Login = () => {
    const { signIn } = useContext(AuthContext);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            // Handle Google sign-in success
            // Access the user information from `result.user`
        } catch (error) {
            // Handle Google sign-in error
            console.log(error);
        }
    };

    const handleGitHubLogin = async () => {
        try {
          const result = await signInWithPopup(auth, githubProvider);
          // Handle GitHub sign-in success
          // Access the user information from `result.user`
        } catch (error) {
          if (error.code === 'auth/account-exists-with-different-credential') {
            // Handle account exists with different credential error
            // You can show a message or provide options to sign in with a different provider
            console.log('Account exists with different credential');
          } else {
            // Handle other errors
            console.log(error);
          }
        }
      };

    return (
        <Container className='w-25 mx-auto pt-3'>
            <h3>Please Login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="Login">
                    Login
                </Button>
                <br />
                <Form.Text>
                    Don't have an account?{' '}
                    <Link to="/register" className="text-decoration-none">
                        Register
                    </Link>
                </Form.Text>
                <br />


                <Form.Text className='fw-bold'> Or Login with
                    <Button className='border-0' variant="" onClick={handleGoogleLogin}><FcGoogle></FcGoogle>
                    </Button>
                </Form.Text>
                <Form.Text className="text-success">
                    <Button className='border-0' variant="" onClick={handleGitHubLogin}> <VscGithub></VscGithub>
                    </Button>
                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;
