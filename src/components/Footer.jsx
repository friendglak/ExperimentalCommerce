import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '../globalStyles'
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import {
    FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    FooterSubText,
    Form,
    FormInput,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    SocialIcon,
    FormTextArea

} from '../style/FooterStyles';

const Footer = () => {
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null }
    })
    const [inputs, setInputs] = useState({
        email: '',
        message: ''
    })
    const handleServerResponse = (ok, msg) => {
        if (ok) {
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: msg }
            })
            setInputs({
                email: '',
                message: ''
            })
        } else {
            setStatus({
                info: { error: true, msg: msg }
            })
        }
    }
    const handleOnChange = e => {
        e.persist()
        setInputs(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
        setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null }
        })
    }
    const handleOnSubmit = e => {
        e.preventDefault()
        setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
        axios({
            method: 'POST',
            url: 'https://formspree.io/f/mgerygvz',
            data: inputs
        })
            .then(response => {
                handleServerResponse(
                    true,
                    'Gracias, tu mensaje ha sido enviado.'
                )
            })
            .catch(error => {
                handleServerResponse(false, error.response.data.error)
            })
    }

    return (
        <>
            <FooterContainer>
                <FooterSubscription>
                    <FooterSubHeading>
                        Para más información, no dude en ponerse en contacto.
                    </FooterSubHeading>
                    <FooterSubText>
                        Puedes hacerlo, cuando desees.
                    </FooterSubText>
                    <Form onSubmit={handleOnSubmit}>
                        <FormInput id="email"
                            type="email"
                            name="_replyto"
                            onChange={handleOnChange}
                            required
                            value={inputs.email} placeholder="Tú correo electrónico" />

                        <FormTextArea id="message"
                            name="message"
                            onChange={handleOnChange}
                            required
                            value={inputs.message} placeholder="Mensaje" />

                        <Button type="submit" disabled={status.submitting} fontBig>
                            {!status.submitting ? !status.submitted ? 'Enviar' : 'Enviado' : 'Enviando...'}</Button>
                    </Form>
                    {status.info.error && (
                        <div className="error">Error: {status.info.msg}</div>
                    )}
                    {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to="/inicio">
                                EXPERIMENTAL
                            </SocialLogo>
                            <WebsiteRights>CON AMOR ❤ © EXPERIMENTAL 2021</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href='https://www.facebook.com/BlueGlakYeti/' target="blank" aria-label="Facebook">
                                    <FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink href='https://twitter.com/camilojheans' target="blank" aria-label="Twitter">
                                    <FaTwitter />
                                </SocialIconLink>
                                <SocialIconLink href='https://github.com/FriendGlak' target="blank" aria-label="Github">
                                    <FaGithub />
                                </SocialIconLink>
                                <SocialIconLink href='https://www.linkedin.com/in/juan-camilo-vel%C3%A1squez-amarillo-556115215/' target="blank" aria-label="LinkedIn">
                                    <FaLinkedin />
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterSubscription>
            </FooterContainer>

        </>
    )
}


export default Footer;