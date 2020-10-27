import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "The Boring Blog"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        {/* <img style={{ margin: 0 }} src="./default.png" alt="Gatsby Scene" /> */}
        <h1>
          Technical and Technological Articles
        </h1>
        <p>welcome to my official blogging site</p>
        {/* <hr></hr> */}
        <h1>
          About Chris
        </h1>
        <p>
          I create solutions using clean code
        </p>
        <p>Now go read some stuffs</p>
        <Link to="/blog/">
          <Button marginTop="35px">Articles</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
