import { NextResponse } from "next/server";

type UploadRequestBody = {
	filename: string;
	mimeType: string;
	data: string; // base64
};

export async function POST(request: Request) {
	try {
		const { google } = await import("googleapis");
		const { filename, mimeType, data } = (await request.json()) as UploadRequestBody;
		if (!filename || !mimeType || !data) {
			return new NextResponse("Missing fields", { status: 400 });
		}

		const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
		const serviceAccountKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;
		const driveFolderId = process.env.GOOGLE_DRIVE_FOLDER_ID;
		const sheetId = process.env.GOOGLE_SHEETS_ID;

		if (!serviceAccountEmail || !serviceAccountKey || !driveFolderId || !sheetId) {
			return new NextResponse("Server not configured", { status: 500 });
		}

		const privateKey = serviceAccountKey.replace(/\\n/g, "\n");
		const auth = new google.auth.JWT({
			email: serviceAccountEmail,
			key: privateKey,
			scopes: [
				"https://www.googleapis.com/auth/drive.file",
				"https://www.googleapis.com/auth/spreadsheets",
			],
		});

		await auth.authorize();

		const drive = google.drive({ version: "v3", auth });
		// Upload file to Drive
		const buffer = Buffer.from(data, "base64");
		const fileRes = await drive.files.create({
			requestBody: {
				name: filename,
				parents: [driveFolderId],
				mimeType,
			},
			media: {
				mimeType,
				body: Buffer.from(buffer),
			},
			fields: "id",
		});

		const fileId = fileRes.data.id as string;

		// Make file public (anyone with link can view)
		await drive.permissions.create({
			fileId,
			requestBody: { role: "reader", type: "anyone" },
		});

		const publicUrl = `https://drive.google.com/uc?id=${fileId}`;

		// Append to Google Sheet: columns A (ID) and B (Image URL)
		const sheets = google.sheets({ version: "v4", auth });
		const current = await sheets.spreadsheets.values.get({
			spreadsheetId: sheetId,
			range: "Sheet1!A:A",
		});
		const numRows = (current.data.values?.length ?? 0);
		const nextId = Math.max(1, numRows); // assumes row 1 is header

		await sheets.spreadsheets.values.append({
			spreadsheetId: sheetId,
			range: "Sheet1!A:B",
			valueInputOption: "RAW",
			requestBody: {
				values: [[nextId, publicUrl]],
			},
		});

		return NextResponse.json({ id: nextId, url: publicUrl });
	} catch (err: unknown) {
		const message = err instanceof Error ? err.message : "Upload error";
		return new NextResponse(message, { status: 500 });
	}
}


