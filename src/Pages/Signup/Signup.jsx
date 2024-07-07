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
    const { showAlert } = useSwalAlert();  



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
                favorites: [] 
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
            width: "40%", marginLeft: "auto", marginRight: "auto", marginTop: "25px", backgroundColor: "#818fdb", paddingTop: "15px", paddingBottom: "15px", borderRadius: "15px", boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)',
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
                        placeholder="Ingrese nombre de usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Dirección de email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Ingrese su email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Ingrese contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicRepeatPassword">
                    <Form.Label>Repetir contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Repetir contraseña"
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Crear cuenta
                </Button>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>
                    <h4>¿Ya tienes cuenta? ➡</h4>
                    <Button onClick={()=>navigate("/signin")}>Iniciar Sesión</Button>
                </div>
                <div style={{ marginTop: "10px" }}>
                    <Button variant="primary" onClick={() => navigate("/home")}>Volver al inicio</Button>
                </div>
            </Form>

        </div>
    );
}

export default SignUp;