

export function Categorie_cart({ name, image }: { name: string, image: string }) {
    return (
        <div
            className="relative aspect-square w-36 md:w-64 rounded-full overflow-hidden cursor-pointer shadow-md bg-cover bg-center bg-no-repeat flex items-center justify-center"
            style={{ backgroundImage: `url(${image})` }}
        >
       
            <div className="w-full aspect-square w-64 absolute bg-black opacity-50 transition-opacity hover:opacity-30"></div>

            <span className="relative  text-white text-2xl font-semibold text-center pointer-events-none">
                {name}
            </span>
        </div>
    );
}