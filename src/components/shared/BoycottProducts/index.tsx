import boycottProduct from "@/api/product";
import BoycottProductTabs from "./Tabs";
import { redirect } from "next/navigation";

const BoycottProducts = async (props: { viewAll?: boolean }) => {
	const products = await (async () => {
		try {
			const data = await boycottProduct.list()
			return { data, success: true }
		} catch (error) {
			return { error, success: false }
		}
	})();


	if (!products.success) {
		return redirect('/error')
	}

	return (
		<div className="flex flex-col items-center max-w-7xl w-full mx-auto my-12">
			<h1 className="leading-[4rem] text-center mx-auto max-w-3xl w-full text-[48px] px-5 py-3 max-md:text-[32px] max-md:leading-[38px]">
				Choose these <b>alternatives</b> to Israeli products
			</h1>

			<p className="text-[20px] text-center text-plain-color max-w-4xl w-full mx-auto py-2  max-md:text-lg font-normal px-6">
				Understand the impact of your purchasing power. Here’s a list of
				products to avoid, ensuring that your money doesn’t support injustice.
			</p>

			{products.data && products.data.length > 0 ? (
				<BoycottProductTabs products={products.data}  {...props} />
			) : null}
		</div>
	);
};

export default BoycottProducts;
