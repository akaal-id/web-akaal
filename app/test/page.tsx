import React from "react";
import TestCard from "../../admin/components/test-card";
import ImageUpload from "../../admin/components/image-upload";

export const metadata = {
	title: "Test",
	description: "Internal testing utilities",
};

export default function TestPage(): JSX.Element {
	return (
		<div className="mx-auto w-full max-w-3xl space-y-6 px-4 py-8 md:py-12">
			<TestCard />
			<ImageUpload />
		</div>
	);
}





