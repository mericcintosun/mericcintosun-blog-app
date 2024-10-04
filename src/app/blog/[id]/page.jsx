import path from "path";
import { promises as fs } from "fs";

export default async function BlogPost({ params }) {
  const { id } = params;

  // JSON dosyasını server-side olarak oku
  const filePath = path.join(process.cwd(), "public", "data", "blogs.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  const blogs = JSON.parse(jsonData);

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
