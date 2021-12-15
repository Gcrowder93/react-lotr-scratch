export async function fetchBooks() {
  const resp = await fetch(`${process.env.REACT_APP_SUPABASE_URL}/rest/v1/books?`, {
    headers: {
      apikey: process.env.REACT_APP_SUPABASE_KEY,
      Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_KEY}`,
    },
  });
  const data = await resp.json();
  return data;
}
