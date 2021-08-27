import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button2, Button3 } from '../globalStyles'
import { FormInput } from '../style/FooterStyles'
import { ContainerLogin, WrapLogin } from '../style/LoginStyles'
import { signInWithGoogle, auth } from '../firebase/utils'
import toast from 'react-hot-toast'

const initialState = {
    email: '',
    password: ''
}
class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = async e => {
        e.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                ...initialState

            })
            toast('¡Bienvenido!', {
                icon: '🖤',
            });
        } catch (err) {
            toast.error("Contraseña incorrecta")
        }
    }
    render() {
        const { email, password } = this.state;
        return (
            <>
                <ContainerLogin>
                    <WrapLogin>
                        <h2>Iniciar sesión</h2>
                        <form onSubmit={this.handleSubmit}>

                            <FormInput
                                style={{ width: 600 }}
                                type="email"
                                name="email"
                                value={email}
                                placeholder="Email"
                                onChange={this.handleChange}
                            />
                            <FormInput
                                style={{ width: 600 }}
                                type="password"
                                name="password"
                                value={password}
                                placeholder="Contraseña"
                                onChange={this.handleChange}
                            />
                            <Button2 type='submit'>ENTRAR</Button2>
                            <hr style={{ color: 'black', marginTop: '20px' }} />
                            <Link to="/register" style={{ textDecoration: 'none' }}>
                                <Button3>REGISTRARSE</Button3>
                            </Link>
                            <Button2 onClick={signInWithGoogle}>ENTRAR CON GOOGLE</Button2>
                        </form>
                    </WrapLogin>
                </ContainerLogin>
            </>
        )
    }
}

const handleSubmit = (evento) => {
    evento.preventDefault();
};



export default LoginComponent
