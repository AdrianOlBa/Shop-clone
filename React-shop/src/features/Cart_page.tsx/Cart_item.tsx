export function Cart_item() {


    return (
        <div className="w-5/6 h-32 flex flex-row items-center justify-start gap-4 bg-white rounded-lg shadow-md p-4 m-2 border-solid border-2 border-gray-400">
          <img src="https://via.placeholder.com/150" alt="Product" className="w-24 h-24 object-cover rounded-lg" />
          <div>
             <h3 className="text-lg font-semibold">Product Name</h3>
          </div>
        </div>
    )
}