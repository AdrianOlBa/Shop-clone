import { Banner } from "./Banner";
import { Categories } from "./Categories";
import { Gallery } from "./Gallery";

export function Home() {
    return (
        <div className="content">
            <Banner>
                Expresa tu mejor version
            </Banner>
            <Categories />
            
            <Gallery />
            <div>
                home
            </div>
        </div>
    )
}