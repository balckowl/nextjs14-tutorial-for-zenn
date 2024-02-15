import Link from "next/link"

interface TBlog {
    id: string;
    title: string;
    content: string;
}

const getBlogData = async (waitTime: number) => {

    await new Promise(resolve => setTimeout(resolve, waitTime))

    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blog`)

    const blogData = await res.json()

    return blogData
}

const BlogList = async ({ waitTime }: { waitTime: number }) => {

    const blogData = await getBlogData(waitTime)

    return (
        <div className="grid grid-cols-12 gap-3 mb-3">
            {blogData.map((blog: TBlog) => (
                <div className="col-span-4 border border-black rounded p-5" key={blog.id}>
                    <Link href={`/blog/${blog.id}`} className="w-full">
                        <h2>{blog.title}</h2>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default BlogList