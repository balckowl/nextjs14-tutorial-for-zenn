import { NextRequest, NextResponse } from "next/server"
import blogData from "../../../../../blog-data.json"

const GET = (req: NextRequest, { params }: { params: { id: number | string } }) => {
    const { id } = params

    const blogArticle = blogData.find(blog => blog.id === Number(id))

    return NextResponse.json({ blogArticle })
}

export { GET }