// src/app/blog/[id]/page.js
export default async function BlogPost({ params }) {
  const { id } = params;

  const response = await fetch(
    `https://public-api.wordpress.com/wp/v2/sites/mericcintosunadminblog.wordpress.com/posts/${id}`,
    { cache: "no-store" } // Her zaman güncel veri almak için cache'i devre dışı bırakın
  );

  const blog = await response.json(); // API'den gelen veriyi alın

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
