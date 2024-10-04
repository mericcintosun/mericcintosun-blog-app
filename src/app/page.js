// src/app/page.js
export default async function Home() {
  const response = await fetch(
    "https://public-api.wordpress.com/wp/v2/sites/mericcintosunadminblog.wordpress.com/posts",
    { cache: "no-store" } // Her zaman güncel veri almak için cache'i devre dışı bırakın
  );

  const blogs = await response.json(); // API'den gelen veriyi alın

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
            <h2>{blog.title.rendered}</h2>
            <p>by {blog.author}</p>
            <a href={`/blog/${blog.id}`}>Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
}
