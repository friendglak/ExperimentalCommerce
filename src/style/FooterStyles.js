import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FaMailchimp } from 'react-icons/fa'

const FooterContainer = styled.div`
    background-color: #101011 ;
    padding: 4rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


const FooterSubscription = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 24px;
    padding: 24;
    color: #fff;
`;

const FooterSubHeading = styled.p`
    margin-bottom: 20px;
    font-size: 20px;
`;

const FooterSubText = styled.p`
    margin-bottom: 20px;
    font-size: 16px;
`;

const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 820px) {
        flex-direction: column;
        width: 80%;
    }
`;

const FormInput = styled.input`
    padding: 10px 20px;
    border-radius: 2px;
    margin-right: 10px;
    outline: none;
    width: 300px;
    margin-bottom: 20px;
    
    border: none;
    font-size: 16px;
    border: 1px solid #fff;

    &::placeholder{
        color: #242424;
    }

    @media screen and (max-width: 820px){
        width: 100%;
        margin: 0 0 16px 0;
    }

`;

const FormTextArea = styled.textarea`
    padding: 10px 20px;
    border-radius: 2px;
    margin-right: 10px;
    outline: none;
    border: none;
    width: 300px;
    margin-bottom: 20px;
    font-size: 16px;
    border: 1px solid #fff;

    &::placeholder{
        color: #242424;
    }

    @media screen and (max-width: 820px){
        width: 100%;
        margin: 0 0 16px 0;
    }

`;

const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;

const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1000px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`;

const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    font-family: 'Karla', sans-serif;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`;

const SocialIcon = styled(FaMailchimp)`
    margin-right: 10px;
`;

const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
`;

const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`
const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`

export {
    FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    FooterSubText,
    Form,
    FormInput,
    SocialMedia,
    SocialIcon,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    SocialLogo,
    SocialMediaWrap,
    FormTextArea
};