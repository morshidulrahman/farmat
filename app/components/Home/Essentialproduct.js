import SectionHeading from "../shared/SectionHeading"
import ProductCard from "../product/Productcard"
import { ESSENTIAL } from "../data/product"
function EssentialProduct() {
    return (
        <section className="pt-5 pb-5">
            <div className="container">
                <SectionHeading title="Essential Products"
                    categories={["All", "Grocery", "Fruits", "Vegetables", "Meat", "Fish"]} />

                {/* product */}
                <div className="w-full flex gap-5 overflow-x-auto mt-5 pt-5  no-scrollbar">
                    {
                        ESSENTIAL.map((product, index) => (
                            <ProductCard product={product} key={index} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default EssentialProduct