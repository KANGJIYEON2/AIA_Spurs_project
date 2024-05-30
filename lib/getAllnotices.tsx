export default async function getAllnotices() {
  const res = await fetch(
    "https://my-json-server.typicode.com/KANGJIYEON2/AIA_Spurs_project/noticelist"
  );
  if (!res.ok) throw Error("failed to fetch data");
  return res.json();
}
