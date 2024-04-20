import assets from "@/assets";
import Banner from "@/components/shared/Banner";
import BoycottProducts from "@/components/shared/BoycottProducts";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const tabs = [
	{
		id: 1,
		value: "kitchen",
		title: "Kitchen",
		products: [
			{
				id: 1,
				boycott: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
				alternate: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
			},
			{
				id: 2,
				boycott: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
				alternate: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
			},
			{
				id: 3,
				boycott: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
				alternate: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
			},
			{
				id: 4,
				boycott: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
				alternate: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
			},
			{
				id: 5,
				boycott: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
				alternate: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
			},
			{
				id: 6,
				boycott: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
				alternate: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
			},
			{
				id: 7,
				boycott: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
				alternate: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
			},
			{
				id: 8,
				boycott: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
				alternate: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
			},
		],
	},
	{
		id: 2,
		value: "dairy-products",
		title: "Dairy Products",
		products: [
			{
				id: 1,
				boycott: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
				alternate: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
			},
			{
				id: 2,
				boycott: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
				alternate: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
			},
			{
				id: 3,
				boycott: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
				alternate: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
			},
			{
				id: 4,
				boycott: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
				alternate: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
			},
			{
				id: 5,
				boycott: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
				alternate: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
			},
			{
				id: 6,
				boycott: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
				alternate: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
			},
			{
				id: 7,
				boycott: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
				alternate: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
			},
			{
				id: 8,
				boycott: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
				alternate: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
			},
			{
				id: 9,
				boycott: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
				alternate: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
			},
			{
				id: 10,
				boycott: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
				alternate: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
			},
		],
	},
	{
		id: 3,
		value: "tab-3",
		title: "Tab 3",
		products: [
			{
				id: 1,
				boycott: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
				alternate: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
			},
			{
				id: 2,
				boycott: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
				alternate: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
			},
			{
				id: 3,
				boycott: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
				alternate: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
			},
			{
				id: 4,
				boycott: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
				alternate: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
			},
			{
				id: 5,
				boycott: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
				alternate: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
			},
			{
				id: 6,
				boycott: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
				alternate: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
			},
			{
				id: 7,
				boycott: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
				alternate: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
			},
			{
				id: 8,
				boycott: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
				alternate: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
			},
			{
				id: 9,
				boycott: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
				alternate: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
			},
			{
				id: 10,
				boycott: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
				alternate: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
			},
			{
				id: 11,
				boycott: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
				alternate: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
			},
			{
				id: 12,
				boycott: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
				alternate: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
			},
			{
				id: 13,
				boycott: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
				alternate: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
			},
			{
				id: 14,
				boycott: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
				alternate: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
			},
			{
				id: 15,
				boycott: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
				alternate: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
			},
			{
				id: 16,
				boycott: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
				alternate: {
					name: "KFC",
					image: assets.images.kfcImage,
				},
			},
		],
	},
];

const BoycottPage = () => {
	return (
		<>
			<Banner
				title={"Boycott Israeli Products\nand use alternatives."}
				variant="secondary"
			>
				<div className="absolute right-0 bottom-0">
					<Image src={assets.images.banImage} alt="ban image" />
				</div>
			</Banner>
			<BoycottProducts tabs={tabs} />
			<Banner
				title={"Donate to Palestine\nthrough Alkhidmat\nfoundation"}
				variant="primary"
				renderCta={() => {
					return (
						<Button
							size={"lg"}
							className="text-[18px] w-[180px] py-6"
							variant={"outline"}
						>
							Donate Now
						</Button>
					);
				}}
			>
				<div className="absolute right-0 bottom-0">
					<Image
						src={assets.images.donationImage}
						alt="donation image"
						height={500}
					/>
				</div>
			</Banner>
		</>
	);
};
export default BoycottPage;
