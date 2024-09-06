"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import assets from "@/assets";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TabItem } from "@/types/utils.type";
import { useState } from "react";
import { ScrollBar, ScrollArea } from "@/components/ui/scroll-area";
import { useRouter } from "next/navigation";

type BoycottProductTabsProps = {
	viewAll?: boolean;
	products: TabItem[];
};
const BoycottProductTabs = (props: BoycottProductTabsProps) => {
	let { products } = props;
	const [viewAll, setViewAll] = useState(false);
	const router = useRouter()
	let tabs = products;
	if (props.viewAll && !viewAll) {
		tabs = products.slice(0, 12);
	}

	return (
		<Tabs defaultValue={tabs[0].value} className="w-full mb-8">
			<ScrollArea>
				<TabsList className="flex items-center mt-3 justify-center px-2 mx-auto w-fit">
					{tabs.map((tab) => (
						<TabsTrigger key={tab.id} value={tab.value}>
							{tab.title}
						</TabsTrigger>
					))}
				</TabsList>
				<ScrollBar orientation="horizontal" />
			</ScrollArea>

			{tabs.map((tab) => (
				<TabsContent value={tab.value} key={tab.id} className="mt-6">
					<div className="w-full flex flex-col gap-5">
						<div
							className="grid grid-cols-4 gap-4 grid-flow-row
							max-md:grid-cols-1 px-4
							max-xl:grid-cols-2
							xl:grid-cols-3
							
							"
						>
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
														style={{
															width: 80,
															height: 80,
															objectFit: "contain",
														}}
														src={item.image}
														alt={item.name}
														width={80}
														height={80}
													/>
													<p className="text-[14px] text-center font-semibold">
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
										router.push('/boycott');		
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
	);
};

export default BoycottProductTabs;
