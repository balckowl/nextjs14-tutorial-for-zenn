import { notFound } from "next/navigation";


interface TBlog {
  id: string;
  title: string;
  content: string;
}

export const dynamicParams = false

export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blog`)

  const blogData = await res.json()

  console.log(blogData)

  return blogData.map((blog: TBlog) => ({
    id: blog.id,
  }))
}

const getBlogArticle = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blog/${id}`)

  const blogArticle = await res.json()

  if (res.status === 404) {
    return notFound()
  }

  return blogArticle
}

const BlogArticlePage = async ({ params }: { params: { id: string } }) => {

  const blogArtcile = await getBlogArticle(params.id)

  // if (blogArtcile === "NotFound") {
  //   return <NotFound />
  // }

  return (
    <div className="container mx-auto py-5">
      <h2 className="text-[50px]">{blogArtcile.title}</h2>
      <p>{blogArtcile.content}</p>
    </div>
  )
}

export default BlogArticlePage