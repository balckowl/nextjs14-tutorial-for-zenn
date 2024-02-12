import { NextRequest, NextResponse } from "next/server"
import blogData from "../../../../../blog-data.json"

const GET = (req: NextRequest, { params }: { params: { id: string } }) => {
    // const id = req.nextUrl.pathname.split('/').pop()

    const { id } = params

    const blogArticle = blogData.find(blog => blog.id === id)

    return NextResponse.json(blogArticle)
}

export { GET }