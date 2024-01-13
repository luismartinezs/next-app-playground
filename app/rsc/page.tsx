export default async function RscPage() {
  // fetch data directly from an api on the server
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/todos`, {
    next: {
      // revalidate: 0, // opts out of caching
      // revalidate: 10, // ISR
      // tags: ["collection"], // use tags to revalidate some requests
    },
    cache: "no-store", // don't cache this request
  }).then((res) => res.json());

  console.log(data);

  return (
    <div>
      <h3>Rsc</h3>
      <p>Todos:</p>
      <p>{data?.hello}</p>
    </div>
  );
}
