import { forms } from "@/data"

export const GET = async () => {
    return Response.json(forms);
}