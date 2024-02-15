import Loading from "@/app/loading";
import Link from "next/link"
import { Suspense } from "react";

interface TBlog {
    id: string;
    title: string;
    content: string;
}

const getBlogData = async () => {

    await new Promise(resolve => setTimeout(resolve, 2000))

    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blog`,{
        cache: 'no-store'
    })

    const blogData = await res.json()

    return blogData
}

const BlogList = async () => {

    const blogData = await getBlogData()

    return (
        <>
            {blogData.map((blog: TBlog) => (
                <div className="col-span-4 border border-black rounded p-5" key={blog.id}>
                    <Link href={`/blog/${blog.id}`} className="w-full">
                        <h2>{blog.title}</h2>
                    </Link>
                </div>
            ))}
        </>
    )
}

export default BlogList