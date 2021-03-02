export const getStaticProps = async () => {
  return {
    props: {
      random: "123",
    },
  };
};
export default function NotFound(props) {
  return <div>Hello 404 page {props.random}</div>;
}
