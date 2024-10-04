import axios from "axios";

export default async function BlogPost({ params }) {
  const { id } = params;

  let blog = null;

  try {
    const response = await axios.get(
      `https://public-api.wordpress.com/wp/v2/sites/mericcintosunadminblog.wordpress.com/posts/${id}`
    );
    blog = response.data; // API'den gelen veriyi alın
  } catch (error) {
    console.error("Error fetching post:", error);
  }

  if (!blog) {
    return <h1>Blog Not Found</h1>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{blog.title.rendered}</h1>
      <p>by {blog.author}</p>
      <div dangerouslySetInnerHTML={{ __html: blog.content.rendered }} />
    </div>
  );
}
