import React, { useState } from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import HeroHeader from "../components/heroHeader"
import { TOPICS } from "../utils/constants";

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {
  const [activeTopic, setActiveTopic] = useState('');

  const getActiveTopicClass = (topic) =>  activeTopic === topic ? 'active' : '';

  const Posts = activeTopic
    ? edges
        .filter((edge) => edge.node.frontmatter.path.includes(activeTopic))
        .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map((edge) => <PostLink key={edge.node.id} post={edge.node} />)
    : [];

  const availableTopics = () => {
    const topics = [];
    TOPICS.forEach(topic => {
      if (edges.filter((edge) => edge.node.frontmatter.path.includes(topic.id)).length) {
        topics.push(topic);
      }
    });
    return topics;
  }

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <HeroHeader />
      <h2 className="choose-topic">
        {!activeTopic
          ? "Choose one of the options above to see the posts 👇"
          : "Enjoy learning new things! 🤓"}
      </h2>
      <div className="grid-topics">
        {availableTopics().map((topic) => (
          <div
            className={`topic-card ${topic.id} ${getActiveTopicClass(
              topic.id
            )}`}
            onClick={() => setActiveTopic(topic.id)}
          >
            <img src={topic.icon} alt={topic.id} />
          </div>
        ))}
      </div>
      <div className="grids">{Posts}</div>
    </Layout>
  );
}

export default IndexPage
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
          }
        }
      }
    }
  }
`
