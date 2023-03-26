/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { demoBlogHtml } from "@/components/Editor/demo-blog-data";
import { getMetaDescription } from "@/helpers";
import { IAuthor, IBlog, IComment } from "@/types";
import {
  Box,
  Chip,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { blogs } from "../../store/blog";
import Error from "../404";

const BlogPage = () => {
  const { id } = useRouter().query as { id: string };
  const blog: IBlog | undefined = blogs.find((b) => b.id === id);
  return (
    <>
      {blog ? (
        <>
          <Head>
            <title>{blog.title}</title>
            <meta
              name="description"
              content={getMetaDescription(blog.summary, blog.description)}
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/lablogo.png" />
          </Head>
          <section id="blog" className="blog" style={{ marginTop: "60px" }}>
            <div
              className="container"
              // data-aos="fade-up"
            >
              <div className="row g-5">
                <div className="col-lg-8">
                  {/* <BlogBody blog={blog}/> */}
                  <div
                    contentEditable="false"
                    dangerouslySetInnerHTML={{ __html: demoBlogHtml }}
                  ></div>
                  {blog.writer.desc ? (
                    <BlogAuthor author={blog.writer} />
                  ) : null}
                  {/* <Comments comments={blog.comments}/> */}
                </div>
                <div className="col-lg-4">
                  <BlogSideBar tags={blog?.tags ?? []} blogId={id} />
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <Error />
      )}
    </>
  );
};

const BlogBody = ({ blog }: { blog: IBlog }) => {
  return (
    <>
      <article className="blog-details">
        <div className="post-img">
          <img src={blog.image} alt="" className="img-fluid" />
        </div>
        <h2 className="title">{blog.title}</h2>
        <div className="meta-top">
          <ul>
            <li className="d-flex align-items-center">
              <i className="bi bi-person" />
              {blog.writer.name}
            </li>
            <li className="d-flex align-items-center">
              <i className="bi bi-clock" />
              <time dateTime="2020-01-01">{blog.created}</time>
            </li>
            <li className="d-flex align-items-center">
              <i className="bi bi-chat-dots" />
              {blog.noofcomments} Comments
            </li>
          </ul>
        </div>
        {/* End meta top */}
        <div className="content">
          <p>{blog.p[0]}</p>
          <p>{blog.p[1]}</p>
          <blockquote>
            <p>{blog.p[2]}</p>
          </blockquote>
          <p>{blog.p[3]}</p>
          <h3>{blog.p[4]}</h3>
          <p>{blog.p[5]}</p>
          <img src={blog.image} className="img-fluid" alt="" />
          <h3>{blog.p[0]}</h3>
        </div>
        {/* End post content */}

        <div className="meta-bottom">
          <i className="bi bi-folder" />
          <ul className="cats">
            <li>{blog.subject}</li>
          </ul>
          <i className="bi bi-tags" />
          <ul className="tags">
            {blog.tags.map((tag, index) => (
              <li key={"blog_page_tag_" + index}>{tag}</li>
            ))}
          </ul>
        </div>
        {/* End meta bottom */}
      </article>
    </>
  );
};

const BlogAuthor = ({ author }: { author: IAuthor }) => {
  return (
    <>
      <div className="post-author d-flex align-items-center">
        <img src={author.image} className="rounded-circle flex-shrink-0" alt="" />
        <div>
          <h4>{author.name}</h4>
          <div className="social-links">
            {author.socialMediaLinks.twitter ? (
              <a
                href={author.socialMediaLinks.twitter}
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-twitter" />
              </a>
            ) : null}
            {author.socialMediaLinks.facebook ? (
              <a
                href={author.socialMediaLinks.facebook}
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-facebook" />
              </a>
            ) : null}
            {author.socialMediaLinks.instagram ? (
              <a
                href={author.socialMediaLinks.instagram}
                target="_blank"
                rel="noreferrer"
              >
                <i className="biu bi-instagram" />
              </a>
            ) : null}
          </div>
          <p>{author.desc}</p>
        </div>
      </div>
    </>
  );
};

const Comments = ({ comments }: { comments: IComment[] }) => {
  return (
    <>
      <div className="comments">
        <h4 className="comments-count">{comments.length} Comments</h4>
        {comments.map((comment, index) => {
          return <Comment key={"comment_" + comment.id} comment={comment} />;
        })}
        <div className="reply-form">
          <h4>Leave a Reply</h4>
          <p>
            Your email address will not be published. Required fields are marked
            *{" "}
          </p>
          <form>
            <div className="row">
              <div className="col-md-6 form-group">
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Your Name*"
                />
              </div>
              <div className="col-md-6 form-group">
                <input
                  name="email"
                  type="text"
                  className="form-control"
                  placeholder="Your Email*"
                />
              </div>
            </div>
            <div className="row">
              <div className="col form-group">
                <input
                  name="website"
                  type="text"
                  className="form-control"
                  placeholder="Your Website"
                />
              </div>
            </div>
            <div className="row">
              <div className="col form-group">
                <textarea
                  name="comment"
                  className="form-control"
                  placeholder="Your Comment*"
                  defaultValue={""}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Post Comment
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

const Comment = ({ comment }: { comment: IComment }) => {
  return (
    <>
      <div id={"comment-" + comment.id} className="comment">
        <div className="d-flex">
          <div className="comment-img">
            <img src={comment.image} alt="" />
          </div>
          <div>
            <h5>
              <span>{comment.author.name}</span>{" "}
              <a href="#" className="reply">
                <i className="bi bi-reply-fill" /> Reply
              </a>
            </h5>
            <time dateTime={comment.created}>{comment.created}</time>
            <p>{comment.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const BlogSideBar = ({ tags, blogId }: { tags: string[]; blogId: string }) => {
  const recentPosts = blogs.filter((b) => b.id !== blogId);
  const [searchTerm, setSearchTerm] = React.useState("");
  const searchedBlogs = recentPosts.filter(
    (blog) =>
      blog.tags.filter((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase().trim())
      ).length > 0 ||
      blog.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  return (
    <>
      <div className="sidebar">
        <div className="sidebar-item search-form">
          <h3 className="sidebar-title">Search</h3>
          <form className="mt-3">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={() => console.log("searchTerm: ", searchTerm)}>
              <i className="bi bi-search" />
            </button>
          </form>
          {searchedBlogs.length > 0 && searchTerm.trim() !== "" ? (
            <Box sx={{ width: "100%", maxHeight: 300, overflow: "auto" }}>
              <nav aria-label="secondary mailbox folders">
                <List>
                  {searchedBlogs.map((blog, i) => {
                    return (
                      <>
                        <ListItem disablePadding>
                          <Link
                            href={`/blog/${blog.id}`}
                            style={{
                              textDecoration: "none",
                              fontSize: "14px !important",
                              color: "black",
                            }}
                          >
                            <ListItemButton>
                              <ListItemText primary={blog.title} />
                            </ListItemButton>
                          </Link>
                        </ListItem>
                      </>
                    );
                  })}
                </List>
              </nav>
            </Box>
          ) : null}
        </div>

        <div className="sidebar-item recent-posts">
          <h3 className="sidebar-title">Recent Posts</h3>
          <div className="mt-3">
            {recentPosts.length > 0
              ? recentPosts
                  .slice(0, 5)
                  .map((post, index) => (
                    <RecentPost key={"recent_blog_post_" + index} blog={post} />
                  ))
              : null}
          </div>
        </div>

        <div className="sidebar-item tags">
          <h3 className="sidebar-title">Tags</h3>
          <ul className="mt-3">
            {tags.map((tag, index) => (
              <Chip
                label={tag}
                key={"blog_page_sidebar_tag_" + index}
                style={{ marginLeft: "5px", marginBottom: "5px" }}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const RecentPost = ({ blog }: { blog: IBlog }) => {
  return <></>;
};

export default BlogPage;
