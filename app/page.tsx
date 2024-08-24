import Link from "next/link";

export default function Home() {
	//ダミーid配列で部屋の種類を管理します。
	const roomIds = [1, 2, 3, 4, 5];
	return (
		<main className="p-10">
			<p className="font-bold">部屋を選択してください</p>
			{roomIds.map((id: number) => (
				<div key={id} className="mt-10">
					<Link href={`/room/${id}`}>部屋{id}</Link>
				</div>
			))}
		</main>
	);
}
