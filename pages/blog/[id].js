import Layout from "../../components/layout";

const PrimerPost = ({data}) => {
  const {id, title, body} = data
  return (
    <Layout>
      <h1>{id}-{title}</h1>
      <p>{body}</p>
    </Layout>
  );
};  

export async function getStaticPaths() {
  try {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    const res = await fetch(url);
    const data = await res.json();
    const paths = data.map(({ id }) => ({ params: { id: `${id}` } ,}));
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  try {
    let url = `https://jsonplaceholder.typicode.com/posts/${params.id}`;
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


export default PrimerPost;

