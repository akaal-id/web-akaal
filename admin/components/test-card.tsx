"use client";
import React, { useEffect, useState } from "react";

type TestCardProps = {
	title?: string;
	description?: string;
};

export default function TestCard({
	title = "Test Card",
	description = "This page is for internal testing and integration checks.",
}: TestCardProps): JSX.Element {
	const [imageUrl, setImageUrl] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	async function loadLatest(): Promise<void> {
		try {
			setLoading(true);
			const res = await fetch("/api/test/latest", { cache: "no-store" });
			if (!res.ok) throw new Error(await res.text());
			const data = (await res.json()) as { id: number | null; url: string | null };
			setImageUrl(data.url || null);
			setError(null);
		} catch (err: unknown) {
			setError(err instanceof Error ? err.message : "Failed to load");
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		loadLatest();
		const handler = () => loadLatest();
		window.addEventListener("akaal:test:uploaded", handler as EventListener);
		return () => window.removeEventListener("akaal:test:uploaded", handler as EventListener);
	}, []);

	return (
		<div className="relative aspect-square w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50">
			{imageUrl ? (
				<img src={imageUrl} alt="Latest uploaded" className="h-full w-full object-cover" />
			) : (
				<div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
					<h2 className="text-base font-semibold text-zinc-100">{title}</h2>
					<p className="mt-2 max-w-[22rem] text-sm text-zinc-400">
						{loading ? "Loading latest image..." : error ? error : description}
					</p>
				</div>
			)}
		</div>
	);
}


