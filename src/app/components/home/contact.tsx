import { Behance01Icon, CallIcon, Linkedin02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function Contact() {
    return (
        <>
            <div className="divide mt-15"></div>
            {/* <section className="mt-15" id="contact"> */}
                <h2 className="text-9xl">Reach me</h2>
                <ul className="flex gap-3 mt-15 text-3xl">
                            <li>
                                <a href="#" className="rounded-lg p-2 border border-(--main-text) w-fit block">
                                    <HugeiconsIcon icon={Linkedin02Icon} size={35}/>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="rounded-lg p-2 border border-(--main-text) w-fit block">
                                    <HugeiconsIcon icon={Behance01Icon} size={35}/>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="rounded-lg p-2 border border-(--main-text) w-fit block">
                                    <HugeiconsIcon icon={CallIcon} size={35}/>
                                    {/* Call me */}
                                </a>
                            </li>
                        </ul>
            {/* </section> */}
        </>
    );
}