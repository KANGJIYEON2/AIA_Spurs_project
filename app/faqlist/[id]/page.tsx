"use client";

import React, { useEffect, useState } from "react";
import { Faqs } from "@/interface/faqlist";
import getFaq from "@/lib/getFaq";

type Params = {
    params: { id: string };
};

export default function FaqPage({ params: { id } }: Params) {
    const [faq, setFaq] = useState<Faqs | null>(null);

    useEffect(() => {
        async function fetchFaqData() {
            const fetchedFaq = await getFaq(id);
            setFaq(fetchedFaq);
        }

        fetchFaqData();
    }, [id]);

    if (!faq) {
        return <div>데이터가없다</div>;
    }
    return (
        <div>
            <p>제목</p>
            {faq.title}
            <p>내용</p>
            {faq.contents}
        </div>
    );
}
