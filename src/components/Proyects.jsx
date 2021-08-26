import React from 'react';
import { Container } from '../globalStyles';
import {
    InfoColumn,
    ProyectSec,
    InfoRow,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img
} from '../style/ProyectStyles';

const Proyect = ({
    lightBg,
    imgStart,
    lightTopLine,
    lightTextDesc,
    description,
    headline,
    lightText,
    topLine,
    img,
    alt,
    start
}) => {
    return (
        <>
            <ProyectSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </ProyectSec>
        </>
    );
};

export default Proyect;
