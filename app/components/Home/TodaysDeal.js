import SectionHeading from "../shared/SectionHeading"
import ProductCard from "../product/Productcard"
import { DEALS } from "../data/product"
function TodaysDeal() {
    return (
        <section className="pt-5 pb-5">
            <div className="container">
                <SectionHeading title="top saver today" text="all offers" />

                {/* product */}
                <div className="w-full flex gap-5 overflow-x-auto mt-5 pt-5 pb-14 no-scrollbar">
                    {
                        DEALS.map((product, index) => (
                            <ProductCard product={product} key={index} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default TodaysDeal