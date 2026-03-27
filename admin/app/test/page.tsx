import React from "react";
import TestCard from "../../components/test-card";
import ImageUpload from "../../components/image-upload";

export default function AdminTestMirrorPage(): JSX.Element {
	return (
		<div className="mx-auto w-full max-w-3xl space-y-6 px-4 py-8 md:py-12">
			<TestCard title="Admin Test Card" description="Mirror page inside admin/ for reference." />
			<ImageUpload />
		</div>
	);
}




