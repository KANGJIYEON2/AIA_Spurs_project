export default async function getNotice(id: string) {
    const res = await fetch(`http://localhost:8000/noticelist/${id}`);

    if (!res.ok) throw new Error("failed to fetch user");
    return res.json();
}
