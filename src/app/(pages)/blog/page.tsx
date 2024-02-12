import Link from "next/link"

interface TBlog {
    id: string;
    title: string;
    content: string;
}

const BlogPage = async () => {

    const getBlogData = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blog`,{ cache: 'no-store' })
    
        const data = await res.json()

        console.log(data)
    
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