import React from "react"
import { StaticQuery, graphql } from "gatsby"
import ContactPage from '../pages/contact';

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={(data) => (
      <div className="hero-header">
        <div className="headline-title">Welcome to my blog!</div>
        <div className="headline site-titles-blue">
          {data.site.siteMetadata.home.title}
        </div>
        <div
          className="primary-content"
          dangerouslySetInnerHTML={{
            __html: data.site.siteMetadata.home.description,
          }}
        />
        {/* <Link to="/contact" className="button -primary">
          Get in touch &rarr;
        </Link> */}
        {/* <ContactPage/> */}
      </div>
    )}
  />
);