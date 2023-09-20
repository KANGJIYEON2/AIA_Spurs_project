export default async function getAllFaqs() {
    const res = await fetch("http://localhost:8000/Faqlist");
    if (!res.ok) throw Error("failed to fetch data");
    return res.json();
}
