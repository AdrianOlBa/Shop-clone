import { useEffect, useState } from "react"

import type { Category } from "../types/Categories";

export function Categories() {
    const [categories, setCategories] = useState<Category | []>([]);

    useEffect(() => {
        fetch("https://fakestoreapi.noksha.dev/api/categories")
            .then((res) => res.json())
            .then((json) => setCategories(json.data || json))
            .catch((error) => console.error("Error fetching categories:", error));
    }, []);

    console.log(categories)
    console.log("render")

    return (
        <div className="w-full">
 categorias

        </div>
    )
}