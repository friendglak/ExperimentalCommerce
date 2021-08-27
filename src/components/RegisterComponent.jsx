import React, { Component } from 'react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { auth, handleUserProfile } from '../firebase/utils'
import { Button2, Button3 } from '../globalStyles'
import { FormInput } from '../style/FooterStyles'
import { ContainerRegister, WrapRegister } from '../style/RegisterStyles'

const initialState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const handleSubmit = (evento) => {
    evento.preventDefault();
};
class RegisterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            toast.error("Las contraseñas no coinciden")
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await handleUserProfile(user, { displayName });
            this.setState({
                ...initialState
            })
        } catch (err) {
            // console.log(err)
        }
    }



    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <>
                <ContainerRegister>
                    <WrapRegister>
                        <h2>Registrarse</h2>
                        <form onSubmit={this.handleFormSubmit}>
                            {/* onSubmit={handleSubmit} */}
                            <FormInput
                                style={{ width: 600 }}
                                type="text"
                                name="displayName"
                                value={displayName}
                                placeholder="Nombre completo"
                                onChange={this.handleChange}
                            />

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

                            <FormInput
                                style={{ width: 600 }}
                                type="password"
                                name="confirmPassword"
                                value={confirmPassword}
                                placeholder="Confirmar contraseña"
                                onChange={this.handleChange}
                            />
                            <Button2>REGISTRARSE</Button2>
                            <hr style={{ color: 'black', marginTop: '20px' }} />

                            {/* <Button2 onClick={signInWithGoogle}>ENTRAR CON GOOGLE</Button2> */}
                        </form>
                    </WrapRegister>
                </ContainerRegister>
            </>
        )
    }
}

export default RegisterComponent
