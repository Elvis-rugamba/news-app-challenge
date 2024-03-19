export async function getData<T>(url: string): Promise<T> {
  const res = await fetch(
    `${process.env.BASE_URL}/${url}?api-key=${process.env.API_KEY}`
  );

  return res.json();
}
