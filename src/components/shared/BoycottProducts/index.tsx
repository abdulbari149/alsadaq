"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import assets from "@/assets";
import Image, { ImageProps } from "next/image";
import { Button } from "@/components/ui/button";
import { TabItem } from "@/types/utils.type";
import { useState } from "react";

type BoycottProductsProps = {
	viewAll?: boolean;
	tabs: TabItem[];
};

const BoycottProducts = (props: BoycottProductsProps) => {
	let { tabs } = props;
	const [viewAll, setViewAll] = useState(false);

	if (props.viewAll && !viewAll) {
		tabs = tabs.slice(0, 12);
	}

	return (
		<div className="flex flex-col items-center max-w-7xl w-full mx-auto my-12">
			<h1 className="leading-[4rem] text-center mx-auto max-w-3xl w-full text-[48px] px-5 py-3 max-md:text-[32px] max-md:leading-[38px]">
				Choose these <b>alternatives</b> to Israeli products
			</h1>

			<p
				className="text-[20px] text-center text-plain-color max-w-4xl w-full mx-auto py-2  max-md:text-lg font-normal px-6"
			>
				Understand the impact of your purchasing power. Here’s a list of products to avoid, ensuring that your money doesn’t support injustice.
				
			</p>

			<Tabs defaultValue={tabs[0].value} className="w-full mb-8">
			<TabsList className="flex items-center mt-3 justify-center px-2 mx-auto w-fit">
					{tabs.map((tab) => (
						<TabsTrigger key={tab.id} value={tab.value}>
							{tab.title}
						</TabsTrigger>
					))}
				</TabsList>
				{tabs.map((tab) => (
					<TabsContent value={tab.value} key={tab.id} className="mt-6">
						<div className="w-full flex flex-col gap-5">
							<div className="grid grid-cols-4 gap-4 grid-flow-row
							max-md:grid-cols-1 px-4
							max-xl:grid-cols-2
							xl:grid-cols-3
							
							">
								{tab.products.map((p) => {
									const { id, ...data } = p;
									return (
										<div
											key={`${tab.id}-${p.id}`}
											className="w-full h-[160px] rounded-md bg-[#F2F5F6] flex flex-row px-3 py-3 gap-3"
										>
											{Object.keys(data).map((key) => {
												const type = key === "boycott" ? "wrong" : "right";
												const item = data[key as keyof typeof data];
												return (
													<div
														key={`${tab.id}-${p.id}-${key}`}
														className="flex-1 relative bg-white rounded-md flex flex-col items-center justify-center gap-3"
													>
														<div className="absolute top-1 right-1">
															<Image
																src={assets.icons[type]}
																alt={`${type} icon`}
															/>
														</div>
														<Image
															src={item.image}
															alt={item.name}
															width={100}
															height={1000}
														/>
														<p className="text-[14px] font-semibold">
															{item.name}
														</p>
													</div>
												);
											})}
										</div>
									);
								})}
							</div>
							<div className="px-3 self-center">
							{props.viewAll && (
								<Button
									variant="secondary"
									size="lg"
									className="px-8 py-6 max-md:w-full"
									onClick={() => {
										setViewAll(true);
									}}
								>
									View All
								</Button>
							)}
							</div>
						</div>
					</TabsContent>
				))}
			</Tabs>
		</div>
	);
};

export default BoycottProducts;
