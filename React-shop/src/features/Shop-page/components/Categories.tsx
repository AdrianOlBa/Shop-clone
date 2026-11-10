import { type SetURLSearchParams } from "react-router";

const listCategories = ["no filters", "kids", "women", "men"]



export function Categories({ Category, set_Category }: { Category: URLSearchParams, set_Category: SetURLSearchParams }) {


    return (
        <div className="w-full flex flex-rowitems-center justify-start mb-5 p-5">

            <div>
                <select
                    onChange={(e) => {
                        console.log(e.target.value)
                        set_Category((prev) => {
                            if (e.target.value === "no filters") {
                                prev.delete("category");
                                return prev;
                            }
                            prev.set("category", e.target.value);
                            return prev;
                        })
                        //Set_Category(
                        // {category: e.target.value};
                        //)
                    }}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white   focus: cursor-pointer"
                >
                    {
                        listCategories.map((item, index) => {
                            return (
                                <option key={item} value={item} selected={(Category.get("category") || "no filters") === item}>
                                    {item}
                                </option>
                            )
                        })
                    }

                </select>
            </div>

        </div>
    );
}