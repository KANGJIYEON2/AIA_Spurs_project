import { useEffect, useState } from "react";
import { Faqs } from "@/interface/faqlist";
import getAllFaqs from "@/lib/getAllFaqs";
import Link from "next/link";

export default function UseFaqs() {
    const [faqs, setFaqs] = useState<Faqs[]>([]);

    useEffect(() => {
        async function fetchFaqs() {
            const data = await getAllFaqs();
            setFaqs(data);
            console.log(data);
        }

        fetchFaqs();
    }, []);

    return (
        <div>
            <h1>
                {faqs.map((faq: any) => {
                    return (
                        <p key={faq.id}>
                            {" "}
                            <Link href={`/faqlist/${faq.id}`}>{faq.title}</Link>
                        </p>
                    );
                })}
            </h1>
        </div>
    );
}
