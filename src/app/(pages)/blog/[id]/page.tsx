import NotFound from "@/app/not-found"

interface TBlog {
  id: number;
  title: string;
  content: string;
}

export async function generateStaticParams(){
  const res = await fetch('http://localhost:3000/api/blog')

  const data = await res.json()

  const blogData = data.blogData
 
  return blogData.map((blog:TBlog) => ({
    id: String(blog.id),
  }))
}

const BlogArticlePage = async ({ params }: { params: { id: number | string } }) => {

  const getBlogArticle = async() => {
    const res = await fetch(`http://localhost:3000/api/blog/${params.id}`)

    const data = await res.json()

    return data.blogArticle
  }

  const blogArtcile = await getBlogArticle()

  if(!blogArtcile){
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