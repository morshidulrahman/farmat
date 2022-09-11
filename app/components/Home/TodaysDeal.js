import SectionHeading from "../shared/SectionHeading"
import Image from "next/image"
function TodaysDeal() {
    return (
        <section className="pt-5 pb-14">
            <div className="container">
                <SectionHeading title="top saver today" text="all offers" />

                {/* product */}
                <div className="lex items-center gap-5 mt-10 overflow-x-auto">
                    <div className="!max-w-[242px] flex flex-col items-start cursor-pointer rounded border-b-whtite hover:border-b-gray-200 hover:card-shadow duration-500 ease-in-out">
                        <Image src="https://i0.wp.com/demo4.drfuri.com/farmart2/wp-content/uploads/sites/11/2020/02/08_3a.jpg?resize=300%2C300&ssl=1"
                            width={190}
                            height={190}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TodaysDeal