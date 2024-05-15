
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SignIn() {
    return (
        <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto", marginTop: "25px", paddingBottom: "15px", boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)',
        WebkitBoxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)',
        MozBoxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)' }}>
            
            <Form style={{width: "60%", marginLeft: "auto", marginRight: "auto"}}>
                <h3>Iniciar sesión:</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <div style={{display: "flex", justifyContent: "space-between", marginTop: "10px", }}>
                    <h4>No tienes cuenta?</h4>
                    <Button>Crear Cuenta</Button>
                </div>
            </Form>
        </div>
    );
}

export default SignIn;