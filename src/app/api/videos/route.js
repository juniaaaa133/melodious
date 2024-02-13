import { musics } from "@/data"

export const GET = async () => {
    return Response.json(musics)
}