type Props = {
    item: {
        width: number
        height: number
    }
}

const Item = (props: Props) => {
    // console.log('Item', props.item.width, props.item.height)
    const { width, height } = props.item
    return (
        <div
            style={{
                display: 'inline-flex',
                width: width,
                height: height,
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                margin: '0',
                padding: '0',
                boxSizing: 'border-box',
                border: '1px solid rgba(0, 0, 0, 0.2)',
            }}
        >
        </div>
    )
}
export default Item