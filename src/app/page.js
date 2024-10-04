import path from "path";
import { promises as fs } from "fs";

export default async function Home() {
  // JSON dosyasını public klasöründen server-side olarak çek
  const filePath = path.join(process.cwd(), "public", "data", "blogs.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  const blogs = JSON.parse(jsonData);

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
