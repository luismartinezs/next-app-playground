async function createItem(formData: FormData) {
  const id = Math.random();
  return id;
}

export default function AboutPage() {
  async function create(formData: FormData) {
    "use server";
    const id = await createItem(formData);
    console.log(id);
  }
  return (
    <div>
      <h3>About</h3>
      <p>
        A route group can be created by wrapping a folder&apos;s name in
        parenthesis: (folderName), that is to organize routes without affecting
        the url, so this page&apos;s url is /about, and not /marketing/about.
      </p>
      <p>
        This also helps to use different layouts for different &ldquo;sibling
        routes&ldquo;
      </p>
      <form action={create}>
        <input type="text" name="name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
