import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { FaRegLightbulb } from 'react-icons/fa'
import { useStaticQuery, graphql } from "gatsby"

const Testimonials = () => {
    const data = useStaticQuery(graphql`
query  {
  allFile(
    filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {in: ["testimonial-2","testimonial-3"]}}
  ) {
    edges {
      node {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}

    `)

    return (
        <TestimonialContainer>
            <TopLine>
                Testimonials
            </TopLine>
            <Description>
                What people are saying
            </Description>
            <ContentWrapper>
                <ColumnOne>
                    <Testimonial>
                        <IoMdCheckmarkCircleOutline css={`color:#3fffa8; font-size:2rem; margin-bottom:1rem;`} />
                        <h3>Jenna Heart</h3>
                        <p>"The greatest experience of my life! Beautiful views, amazing people, crazy lifestyle. Definetly recommend. Once in a lifetime experience, you will not regret your decision.</p>
                    </Testimonial>
                    <Testimonial>
                        <FaRegLightbulb css={`color:#f9b19b; font-size:2rem; margin-bottom:1rem;`} />
                        <h3>Jaqueline Mulligan</h3>
                        <p>"My Life changed after experiencing this as I realized there is so much more to life and so much in the world that I was unaware of; such beauty, culture, history and love. 10/10 Experience !!</p>
                    </Testimonial>
                </ColumnOne>
                <ColumnTwo>
                    {data.allFile.edges.map((image, key) => (
                        <Images key={key} fluid={image.node.childImageSharp.fluid} />
                    ))}

                </ColumnTwo>
            </ContentWrapper>
        </TestimonialContainer>
    )
}

export default Testimonials


const TestimonialContainer = styled.div`
width: 100%;
background: #fcfcfc;
color: #000;
padding: 5rem calc((100vw - 1300px) / 2);
height: 100%
`
const TopLine = styled.div`
color: #077bf1;
font-size: 1rem;
padding-left: 2rem;
margin-bottom: 0.75rem
`
const Description = styled.div`
text-align: start;
padding-left: 2rem;
margin-bottom: 4rem;
font-size: clamp(1.5rem, 5vw, 2rem);
font-weight: bold;
`
const ContentWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
padding: 0 2rem;

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
}
`
const ColumnOne = styled.div`
display: grid;
grid-template-rows: 1fr 1fr;
`
const Testimonial = styled.div`
padding-top: 1rem;
padding-right: 2 rem;

h3{ 
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
}

p {
    color: #3b3b3b;
}
`
const ColumnTwo = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
margin-top: 2 rem;
grid-gap: 10px;

@media screen and (max-width: 500px){
    grid-template-columns: 1fr;
}
`
const Images = styled(Img)`
border-radius: 10px;
height: 100%;
`