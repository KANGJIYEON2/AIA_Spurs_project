export default async function getAllnotices() {
    const res = await fetch("http://localhost:8000/noticelist");
    if (!res.ok) throw Error("failed to fetch data");
    return res.json();
}
