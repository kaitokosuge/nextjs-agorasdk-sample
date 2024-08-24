"use client";
import React, { useState } from "react";
import AgoraUIKit, { layout } from "agora-react-uikit";
import { useParams } from "next/navigation";

export default function Video() {
	const params = useParams();
	const roomId = params.id;
	const [videoCall, setVideoCall] = useState(true);
	const rtcProps = {
		appId: "",
		channel: `${roomId}`,
		token: null,
		layout: layout.grid,
	};
	const callbacks = {
		EndCall: () => setVideoCall(false),
	};
	return (
		<div>
			<div>
				<h1>room {roomId}</h1>
			</div>
			{videoCall ? (
				<div style={{ display: "flex", width: "100vw", height: "100vh" }}>
					<AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
				</div>
			) : (
				<h3 onClick={() => setVideoCall(true)}>Start Call</h3>
			)}
		</div>
	);
}
