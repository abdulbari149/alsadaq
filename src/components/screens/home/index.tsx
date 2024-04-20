import DonationForm from "./DonationForm";
import BoycottProducts from "@/components/shared/BoycottProducts";
import Banner from "@/components/shared/Banner";
import { Button } from "@/components/ui/button";
import assets from "@/assets";
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
		],
	},
];

const HomePage = () => {
	return (
		<>
			<Banner
				title={"Donate to Palestine\nthrough Alkhidmat\nfoundation"}
				variant="primary"
				renderCta={() => {
					return (
						<div className="flex flex-row items-center gap-4">
							<Button
								size={"lg"}
								className="text-[18px] py-7"
								variant={"default"}
							>
								Boycott Israeli Products
							</Button>
							<Button
								size={"lg"}
								className="text-[18px] py-7"
								variant={"outline"}
							>
								Take Quiz
							</Button>
						</div>
					);
				}}
			/>
			<DonationForm />
			<div className="mt-[15vh]">
				<BoycottProducts viewAll tabs={tabs} />
			</div>
		</>
	);
};
export default HomePage;
