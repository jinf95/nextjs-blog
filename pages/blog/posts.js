import Link from "next/link";
import Layout from "../../components/layout";

const Posts = ({ data }) => {
  return (
    <Layout title="Next js || Posts" description="agregue una descripcion">
      <h1>Lista de Posts</h1>

      {data.map(({ id, title, body }) => (
        <div key={id}>
          <h3>
            <Link href={`/blog/${id}`}>
              <a>
                {id} - {title}
              </a>
            </Link>
          </h3>
          <p>{body}</p>
        </div>
      ))}
      <Link href="/">
        <a> Volver a Inicio</a>
      </Link>
    </Layout>
  );
};

export async function getStaticProps() {
  try {
    let url = "https://jsonplaceholder.typicode.com/posts";
    const res = await fetch(url);
    const data = await res.json();

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
export default Posts;

