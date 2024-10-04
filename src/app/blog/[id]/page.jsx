export default async function BlogPost({ params }) {
    const { id } = params;
  
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/data/blogs.json`);
  
    const blogs = await res.json();
  
    const blog = blogs.find((b) => b.id.toString() === id);
  
    if (!blog) {
      return <h1>Blog Not Found</h1>;
    }
  
    return (
      <div style={{ padding: "20px" }}>
        <h1>{blog.title}</h1>
        <p>by {blog.author}</p>
        <p>{blog.content}</p>
      </div>
    );
  }
  