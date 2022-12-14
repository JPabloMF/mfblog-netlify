import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
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
        <div className="icons">
          <a href="https://twitter.com/_MFcoder_" target="_blank">
            <FaTwitter />
          </a>
          <a
            href="https://co.linkedin.com/in/juan-pablo-mu%C3%B1oz-alvarez-a9719914b"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/JPabloMF" target="_blank">
            <FaGithub />
          </a>
        </div>
        {/* <Link to="/contact" className="button -primary">
          Get in touch &rarr;
        </Link> */}
        {/* <ContactPage/> */}
      </div>
    )}
  />
);