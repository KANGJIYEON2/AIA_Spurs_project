export default async function getFaq(id: string) {
    const res = await fetch(`http://localhost:8000/Faqlist/${id}`);

    if (!res.ok) throw new Error("failed to fetch user");
    return res.json();
}
