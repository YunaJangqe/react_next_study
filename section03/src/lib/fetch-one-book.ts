import { BookData } from "@/types";

export default async function fetchOneBook(id: number): Promise<BookData | null> {
    const url = `https://onebite-books-server-main-mauve.vercel.app/book/${id}`;

    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw Error();
        }
        return await response.json();
    } catch(err) {
        console.log(err);
        return null;
    }
    
}