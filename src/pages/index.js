import * as React from "react"
import Hero from "../components/hero"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Trips from "../components/Trips"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import Email from "../components/Email"



const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Trips heading="Our Favourite Destinations" />
    <Testimonials />
    <Stats />
    <Email />
  </Layout>
)

export default IndexPage
