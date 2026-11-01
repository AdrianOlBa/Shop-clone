import { Banner } from "./Banner";
import { Categories } from "./Categories";
import { Gallery } from "./Gallery";

export function Home() {
    return (
        <div className="content">
            <Banner>
                Express your best version
            </Banner>
            <Categories />
            <Gallery />
        </div>
    )
}