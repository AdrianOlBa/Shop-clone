import { useEffect } from "react";
//en proceso
export function useCategories(){

        const [Categorias, setCategorias] = useState<Products | null>(null)
    

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch("https://fakestoreapi.noksha.dev/api/products");
                    const json = await response.json();
                    setProductos(json);
                } catch (error) {
                    console.error("Error in products api", error);
                }
            };
    
            fetchData();
        }, []);
    
}