import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Link from 'next/link';
import { blogs } from "../store/blog";

const Blogs = ({limit = false}) => {
  const blogsToShow = limit ? blogs.slice(0,3) : blogs;

  return (
    <>
      <section id="recent-posts" className="recent-posts sections-bg">
        <div className="container">
          <div className="section-title">
            <h2>Blogs</h2>
            <p>
              Recent Blog Posts
            </p>
          </div>
          <div className="row gy-4">
            {blogsToShow.map((blog, index) => (
              <Blog key={"blog_" + index} blog={blog} />
            ))}
          </div>
          {/* End recent posts list */}
        </div>
      </section>
    </>
  );
};

const Blog = ({blog}) => {
  return (
    <>
      <div className="col-xl-4 col-md-6">
        <article>
          <div className="post-img">
            <img src={blog.image} alt="" className="img-fluid" />
          </div>
          <p className="post-category">{blog.topic}</p>
          <h2 className="title">
            <Link style={{textDecoration: 'none'}} href={`/blog/${blog.id}`} >{blog.title}</Link>
          </h2>
          <div className="d-flex align-items-center">
            <div className="post-meta">
              <Stack style={{ flexWrap: "wrap" }} direction="row" spacing={1}>
                {blog.tags.map((tag, index) => (
                  <Chip
                    style={{ margin: '5px 10px 5px 0' }}
                    label={tag}
                    key={"blog_tag_" + index}
                    color="default"
                  />
                ))}
              </Stack>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default Blogs;