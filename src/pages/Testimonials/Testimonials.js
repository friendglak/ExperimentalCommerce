import React from 'react'
import { TestimonialsObjOne } from './Data'
import Testimonial from '../../components/Testimonials.jsx'


const Testimonials = () => {
    return (
        <>
            <Testimonial {...TestimonialsObjOne} />
        </>
    )
}

export default Testimonials
