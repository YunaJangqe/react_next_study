import { BookData } from "@/types";

export default async function fetchRandomBooks() : Promise<BookData[]> {
    const url = `https://onebite-books-server-main-mauve.vercel.app/book/random`;

    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw Error();
        }
        return await response.json();
    } catch(err) {
        console.log(err);
        return [];
    }    
}