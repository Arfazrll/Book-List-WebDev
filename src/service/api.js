const BASE_URL = "https://potterapi-fedeperin.vercel.app/en/books";

export const fetchBooks = async () => {
    try {
        console.log("Calling API:", BASE_URL);
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new Error("Failed to fetch books");
        }
        const data = await response.json();
        console.log("API Response Data:", data);
        return data;
    } catch (error) {
        console.error("Error fetching books:", error);
        return [];
    }
};
