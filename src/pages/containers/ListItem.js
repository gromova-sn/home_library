export const ListItem = (data, renderFuction) => {
	return data.map((item, index) => {return renderFuction(item, index)})
}