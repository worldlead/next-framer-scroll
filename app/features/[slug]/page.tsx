import { notFound } from "next/navigation";
import { allFeatures } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";
import { Redis } from "@upstash/redis";

export const revalidate = 60;

type Props = {
	params: {
		slug: string;
	};
};

const redis = Redis.fromEnv();

export async function generateStaticParams(): Promise<Props["params"][]> {
	return allFeatures
		.filter((p) => p.published)
		.map((p) => ({
			slug: p.slug,
		}));
}

export default async function PostPage({ params }: Props) {
	const slug = params?.slug;
	const feature = allFeatures.find((feature) => feature.slug === slug);

	if (!feature) {
		notFound();
	}

	const views =
		(await redis.get<number>(["pageviews", "features", slug].join(":"))) ?? 0;

	return (
		<div className="bg-zinc-50 min-h-screen">
			<Header feature={feature} views={views} />
			<ReportView slug={feature.slug} />

			<article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
				<Mdx code={feature.body.code} />
			</article>
		</div>
	);
}
