export const INPUT_LINK = "INPUT_LINK"
export const SEND_TO_PAGE = "SEND_TO_PAGE"

export function inputLink(link) {
	return {
		type: INPUT_LINK,
		link,
	}
}

export function sendToPage() {
	return {
		type: SEND_TO_PAGE,
	}
}