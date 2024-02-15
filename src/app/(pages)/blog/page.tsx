import BlogList from "@/app/components/blogList";
import Loading from "@/app/loading";
import Link from "next/link"
import { Suspense } from "react";

const BlogPage = async () => {

    return (
        <div className="container mx-auto py-[50px]">
            {/* <h2>Blog</h2> */}
            <div className="grid grid-cols-12 gap-3">
                {/* <Suspense fallback={<Loading />}> */}
                    <BlogList />
                {/* </Suspense> */}
            </div>
        </div>
    )
}

export default BlogPage