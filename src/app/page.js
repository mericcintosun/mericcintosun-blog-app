export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/data/blogs.json`);

  console.log("data/blogs.json");

  const blogs = await res.json();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Blog List</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {blogs.map((blog) => (
          <div
            key={blog.id}
            style={{
              border: "1px solid #ccc",
              padding: "20px",
              width: "300px",
              borderRadius: "10px",
            }}
          >
            <h2>{blog.title}</h2>
            <p>by {blog.author}</p>
            <a href={`/blog/${blog.id}`}>Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
}
