const HomePage = ({ products, categories }) => (
	<>
		<pre>{JSON.stringify(products, undefined, 2)}</pre>
		<pre>{JSON.stringify(categories, undefined, 2)}</pre>
	</>
);

export const getServerSideProps = async () => {
	const products = await fetchProducts();
	const categories = await fetchCategories();

	return {
		props: {
      products,
		  categories
    }
	};
};

export default HomePage;
