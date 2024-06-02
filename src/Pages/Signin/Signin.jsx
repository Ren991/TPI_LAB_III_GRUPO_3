
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from "../../Services/firebase";
import { doc, getDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
// import { AuthContext } from '../../Components/AuthContext/AuthContext';
import { useContext } from 'react';
import { useUser } from "../../Components/AuthContext/AuthContext"



function SignIn() {
    // const { setIsSignedIn, setUserRol } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { signIn } = useUser();
    const { user } = useUser();   
    useEffect(() => {
        if (user !== null) {
         navigate("/home")
        }
      }, [user]);     

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        const mail = email;
        
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            const userDocRef = doc(db, 'users', user.uid);
            const userDoc = await getDoc(userDocRef);


            if (userDoc.exists()) {
                const userData = userDoc.data();
                const token = await user.getIdToken();
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('token', token);
                localStorage.setItem('userRol', userData.role);
                const dataUser = { email: mail, token: token };
                //setIsSignedIn(true);
                //setUserRol(userData.role);  
                signIn(userData);

                navigate("/home")
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Credenciales Inválidas',
                    icon: 'error',
                    confirmButtonText: 'Salir'
                })
            }
        } catch (err) {
            Swal.fire({
                title: 'Error!',
                text: 'Credenciales Inválidas',
                icon: 'error',
                confirmButtonText: 'Salir'
            })
        }
    }

    return (
        <div style={{
            width: "80%", marginLeft: "auto", marginRight: "auto", marginTop: "25px", backgroundColor: "#818fdb", paddingTop: "15px", paddingBottom: "15px", boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)',
            WebkitBoxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)',
            MozBoxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)'
        }}>

            <Form style={{ width: "60%", marginLeft: "auto", marginRight: "auto" }} onSubmit={handleSubmit}>
                <h3>Iniciar sesión:</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px", }}>
                    <h4>No tienes cuenta?</h4>
                    <Button onClick={() => navigate("/signup")}>Crear Cuenta</Button>
                </div>
            </Form>
        </div>
    );
}

export default SignIn;