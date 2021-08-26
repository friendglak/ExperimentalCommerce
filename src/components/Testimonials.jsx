import React from 'react';
import {
    TestimonialLinkItems,
    TestimonialLinksContainer,
    TestimonialLinksWrapper,
    TestimonialLinkTitle,
    TestimonialSec,
    TestimonialText,
    Heading,
    TestimonialImg,
    Img
} from '../style/TestimonialsStyles';


const Testimonial = ({
    lightTextDesc,
    description,
    headline,
    lightText,
    img,
    alt
}) => {
    return (
        <>
            <TestimonialSec>
                <Heading lightText={lightText}>{headline}</Heading>
                <TestimonialLinksContainer>
                    <TestimonialLinksWrapper>
                        <TestimonialLinkItems>
                            <TestimonialImg>
                                <Img src={img[1]} alt={alt[1]} />
                            </TestimonialImg>
                            <TestimonialLinkTitle>Juan Antonio</TestimonialLinkTitle>
                            <TestimonialText lightTextDesc={lightTextDesc}>{description[1]}</TestimonialText>
                        </TestimonialLinkItems>
                        <TestimonialLinkItems>
                            <TestimonialImg>
                                <Img src={img[2]} alt={alt[2]} />
                            </TestimonialImg>
                            <TestimonialLinkTitle>Albert Flores</TestimonialLinkTitle>
                            <TestimonialText lightTextDesc={lightTextDesc}>{description[2]}</TestimonialText>
                        </TestimonialLinkItems>
                        <TestimonialLinkItems>
                            <TestimonialImg>
                                <Img src={img[3]} alt={alt[3]} />
                            </TestimonialImg>
                            <TestimonialLinkTitle>Darlene Robertson</TestimonialLinkTitle>
                            <TestimonialText lightTextDesc={lightTextDesc}>{description[3]}</TestimonialText>
                        </TestimonialLinkItems>
                        <TestimonialLinkItems>
                            <TestimonialImg>
                                <Img src={img[4]} alt={alt[4]} />
                            </TestimonialImg>
                            <TestimonialLinkTitle>Jane Cooper</TestimonialLinkTitle>
                            <TestimonialText lightTextDesc={lightTextDesc}>{description[4]}</TestimonialText>
                        </TestimonialLinkItems>
                        <TestimonialLinkItems>
                            <TestimonialImg>
                                <Img src={img[5]} alt={alt[5]} />
                            </TestimonialImg>
                            <TestimonialLinkTitle>Eleanor Pena</TestimonialLinkTitle>
                            <TestimonialText lightTextDesc={lightTextDesc}>{description[5]}</TestimonialText>
                        </TestimonialLinkItems>
                        <TestimonialLinkItems>
                            <TestimonialImg>
                                <Img src={img[6]} alt={alt[6]} />
                            </TestimonialImg>
                            <TestimonialLinkTitle>Guy Hawkins</TestimonialLinkTitle>
                            <TestimonialText lightTextDesc={lightTextDesc}>{description[6]}</TestimonialText>
                        </TestimonialLinkItems>
                    </TestimonialLinksWrapper>
                </TestimonialLinksContainer>
            </TestimonialSec>
        </>
    )
}

export default Testimonial;
