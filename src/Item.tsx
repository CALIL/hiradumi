type Props = {
    item: {
        width: number
        height: number
    }
}

const Item = (props: Props) => {
    console.log('Item', props.item.width, props.item.height)
    const { width, height } = props.item
    return (
        <div
            style={{
                display: 'inline-flex',
                width: width,
                height: height,
                border: '1px solid #ccc',
            }}
        >
        </div>
    )
}
export default Item