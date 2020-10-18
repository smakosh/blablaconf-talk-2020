import { useRouter } from "next/router";

const ProductPage = ({ product }) => {
	const router = useRouter();

	if (router.isFallback) {
		return <h1>Loading...</h1>;
	}
	return <pre>{JSON.stringify(product, undefined, 2)}</pre>;
};

export const getStaticPaths = async () => {
	const products = await fetchProducts();
	const paths = products.map(({ id }) => ({
		params: { id },
	}));

	return {
		paths,
		fallback: true
	};
};

export const getStaticProps = async ({ params: { id } }) => {
	const product = await fetchProductById(id);

	return {
		props: {
			product
		},
		revalidate: 2
	};
};

export default ProductPage;