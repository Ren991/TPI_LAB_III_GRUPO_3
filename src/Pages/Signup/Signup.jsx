import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../Services/firebase';
import { useNavigate } from "react-router-dom";
import { useUser } from "../../Components/AuthContext/AuthContext"
import useSwalAlert from '../../hooks/useSwalAlert';



function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { user } = useUser();
    const { showAlert } = useSwalAlert();  //Hook personalizado



    useEffect(() => {
        if (user !== null) {
            navigate("/home")
        }
    }, [user]);


    const auth = getAuth();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            const userDocRef = doc(db, 'users', user.uid);
            await setDoc(userDocRef, {
                email: user.email,
                role: 'commonUser',
                username: username,
                favorites: [] //para guardar los favoritos.
            });

            showAlert('Usuario Registrado con éxito!', 'success');
            navigate(("/signin"));
        } catch (error) {
            showAlert('Error al registrarse, intentelo nuevamente.', 'error');

        }

        if (password !== repeatPassword) {
            showAlert('Las contraseñas no coinciden.', 'error');
            return;
        }


    };

    return (
        <div style={{
            width: "80%", marginLeft: "auto", marginRight: "auto", marginTop: "50px", backgroundColor: "#818fdb", paddingTop: "15px", paddingBottom: "15px", boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)',
            WebkitBoxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)',
            MozBoxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)'
        }}>

            <Form style={{ width: "60%", marginLeft: "auto", marginRight: "auto" }} onSubmit={handleSubmit}>
                <h3>Crear Cuenta:</h3>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicRepeatPassword">
                    <Form.Label>Repeat Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Repeat Password"
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Crear cuenta
                </Button>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px", }}>
                    <h4>Ya tienes cuenta</h4>
                    <Button onClick={()=>navigate("/signin")}>Iniciar Sesión</Button>
                </div>
            </Form>

        </div>
    );
}

export default SignUp;