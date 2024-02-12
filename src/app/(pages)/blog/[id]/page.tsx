import NotFound from "@/app/not-found"

interface TBlog {
  id: string;
  title: string;
  content: string;
}

export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blog`)

  const blogData = await res.json()

  console.log(blogData)

  return blogData.map((blog: TBlog) => ({
    id: blog.id,
  }))
}

const BlogArticlePage = async ({ params }: { params: { id: string } }) => {

  const getBlogArticle = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blog/${params.id}`)

    const blogArticle = await res.json()

    return blogArticle
  }

  const blogArtcile = await getBlogArticle()

  if (!blogArtcile) {
    return <NotFound />
  }

  return (
    <div className="container mx-auto py-5">
      <h2 className="text-[50px]">{blogArtcile.title}</h2>
      <p>{blogArtcile.content}</p>
    </div>
  )
}

export default BlogArticlePage