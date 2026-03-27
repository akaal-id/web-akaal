import { NextResponse } from "next/server";

export async function GET() {
	try {
		const { google } = await import("googleapis");
		const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
		const serviceAccountKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;
		const sheetId = process.env.GOOGLE_SHEETS_ID;

		if (!serviceAccountEmail || !serviceAccountKey || !sheetId) {
			return new NextResponse("Server not configured", { status: 500 });
		}

		const privateKey = serviceAccountKey.replace(/\\n/g, "\n");
		const auth = new google.auth.JWT({
			email: serviceAccountEmail,
			key: privateKey,
			scopes: [
				"https://www.googleapis.com/auth/spreadsheets.readonly",
			],
		});

		await auth.authorize();

		const sheets = google.sheets({ version: "v4", auth });
		const res = await sheets.spreadsheets.values.get({
			spreadsheetId: sheetId,
			range: "Sheet1!A:B",
		});
		const values = res.data.values || [];
		if (values.length <= 1) {
			return NextResponse.json({ id: null, url: null });
		}
		const last = values[values.length - 1];
		const id = Number(last[0]);
		const url = String(last[1] || "");
		return NextResponse.json({ id, url });
	} catch (err: unknown) {
		const message = err instanceof Error ? err.message : "Error";
		return new NextResponse(message, { status: 500 });
	}
}


