"use client";

import React, { useRef, useState } from "react";

type SelectedImage = {
	file: File;
	previewUrl: string;
};

export default function ImageUpload(): JSX.Element {
	const inputRef = useRef<HTMLInputElement | null>(null);
	const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(null);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

	function onPickFile(): void {
		inputRef.current?.click();
	}

	function onFileChange(event: React.ChangeEvent<HTMLInputElement>): void {
		setErrorMessage(null);
		const file = event.target.files?.[0];
		if (!file) return;
		if (!file.type.startsWith("image/")) {
			setErrorMessage("Please select an image file.");
			return;
		}
		const previewUrl = URL.createObjectURL(file);
		setSelectedImage({ file, previewUrl });
	}

	function onClear(): void {
		if (selectedImage?.previewUrl) URL.revokeObjectURL(selectedImage.previewUrl);
		setSelectedImage(null);
		setErrorMessage(null);
		if (inputRef.current) inputRef.current.value = "";
	}

	async function onSubmit(): Promise<void> {
		if (!selectedImage) {
			setErrorMessage("Choose an image first");
			return;
		}
		try {
			setIsSubmitting(true);
			const arrayBuffer = await selectedImage.file.arrayBuffer();
			const base64 = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));
			const res = await fetch("/api/test/upload", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					filename: selectedImage.file.name,
					mimeType: selectedImage.file.type,
					data: base64,
				}),
			});
			if (!res.ok) {
				const msg = await res.text();
				throw new Error(msg || "Upload failed");
			}
			// Notify listeners to refresh latest image
			window.dispatchEvent(new CustomEvent("akaal:test:uploaded"));
		} catch (err: unknown) {
			const message = err instanceof Error ? err.message : "Upload failed";
			setErrorMessage(message);
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<div className="w-full">
			<div className="relative aspect-square w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50">
				{/* Controls */}
				<div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between p-3">
					<h3 className="text-xs font-medium text-zinc-300">Image upload</h3>
					<div className="space-x-2">
						<button
							onClick={onPickFile}
							className="rounded-md bg-purple-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-purple-500"
						>
							Choose
						</button>
						{selectedImage && (
							<button
								onClick={onClear}
								className="rounded-md border border-zinc-700 px-3 py-1.5 text-xs font-semibold text-zinc-200 hover:bg-zinc-800"
							>
								Clear
							</button>
						)}
						<button
							onClick={onSubmit}
							disabled={!selectedImage || isSubmitting}
							className="rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-60"
						>
							{isSubmitting ? "Submitting..." : "Submit"}
						</button>
					</div>
				</div>

				<input
					ref={inputRef}
					type="file"
					accept="image/*"
					onChange={onFileChange}
					className="hidden"
				/>

				{/* Content area fills the square */}
				<div className="absolute inset-0">
					{selectedImage ? (
						<img
							src={selectedImage.previewUrl}
							alt="Selected preview"
							className="h-full w-full object-cover"
						/>
					) : (
						<button
							onClick={onPickFile}
							className="flex h-full w-full items-center justify-center text-xs text-zinc-400"
						>
							Click to choose image
						</button>
					)}
				</div>

				{/* Error message at bottom */}
				{errorMessage && (
					<div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 p-3">
						<p className="rounded-md bg-red-950/60 px-2 py-1 text-[10px] text-red-300 ring-1 ring-red-500/20">
							{errorMessage}
						</p>
					</div>
				)}
			</div>
		</div>
	);
}


