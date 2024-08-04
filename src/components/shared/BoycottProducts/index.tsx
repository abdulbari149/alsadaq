'use client'
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
		tabs = tabs.slice(0, 12)
	}

	return (
		<div className="flex flex-col items-center px-[8%] my-12">
			<h1 className="text-4xl w-[60%] font-semibold leading-[4rem] text-center text-[#333839] text-[48px] text-wrap py-3">
				Boycott Israeli products and use these alternatives
			</h1>

			<Tabs defaultValue={tabs[0].value} className="w-full mb-8">
				<TabsList className="flex items-center my-5 justify-center px-2 mx-auto w-fit">
					{tabs.map((tab) => (
						<TabsTrigger key={tab.id} value={tab.value}>
							{tab.title}
						</TabsTrigger>
					))}
				</TabsList>
				{tabs.map((tab) => (
					<TabsContent value={tab.value} key={tab.id} className="mt-10">
						<div className="w-100 flex flex-col gap-8">
							<div className="grid grid-cols-4 gap-4 grid-flow-row">
								{tab.products.map((p) => {
									const { id, ...data } = p;
									return (
										<div
											key={`${tab.id}-${p.id}`}
											className="w-100 h-[160px] rounded-md bg-[#F2F5F6] flex flex-row px-3 py-3 gap-3"
										>
											{Object.keys(data).map((key) => {
												const type = key === "boycott" ? "right" : "wrong";
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
														<Image src={item.image} alt={item.name} width={100} height={1000} />
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
							{props.viewAll && (
								<Button
									variant={"outline-secondary"}
									size={"lg"}
									className="self-center px-8 py-6"
									onClick={() => {
										setViewAll(true)
									}}
								>
									View All
								</Button>
							)}
						</div>
					</TabsContent>
				))}
			</Tabs>
		</div>
	);
};

export default BoycottProducts;
