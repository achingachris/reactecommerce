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
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Welcome to my Blogging site. Do not expect so much fun stuff, because it's too technical</p>
        <p>
          As much as I am also a front end developer, this site may or may not look that classy, but it works!!. Will probably make it cool overtime, but I constantly update my stuffs.
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
