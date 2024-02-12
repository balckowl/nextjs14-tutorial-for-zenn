import Link from "next/link"

interface TBlog {
    id: number;
    title: string;
    content: string;
}

const BlogPage = async () => {

    const getBlogData = async () => {
        const res = await fetch('http://localhost:3000/api/blog')
    
        const data = await res.json()
    
        return data.blogData
    }

    const blogDataList = await getBlogData()

    return (
        <div className="container mx-auto py-[50px]">
            <div className="grid grid-cols-12 gap-3">
                {blogDataList.map((blog: TBlog) => (
                    <div className="col-span-4 border border-black rounded p-5" key={blog.id}>
                        <Link href={`/blog/${blog.id}`} className="w-full">
                            <h2>{blog.title}</h2>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BlogPage