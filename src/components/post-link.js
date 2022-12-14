import React from "react";
import { Link } from "gatsby";

const PostLink = ({ post }) => (
  <Link to={post.frontmatter.path} className="card">
    <article className="post-link">
      {/* {!!post.frontmatter.thumbnail && (
        <img src={post.frontmatter.thumbnail} alt={post.frontmatter.title + "- Featured Shot"} />
      )} */}
      <header>
        <h2 className="post-title">{post.frontmatter.title}</h2>
        <div className="post-meta">{post.frontmatter.date}</div>
      </header>
    </article>
  </Link>
);
export default PostLink;
