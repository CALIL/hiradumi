type Props = {
    item: {
        title: string
        isbn: string
        width: number
        height: number
    }
}

const Item = (props: Props) => {
    const { title, isbn, width, height } = props.item
    return (
        <div
            style={{
                display: 'inline-block',
                width: width,
                height: height,
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                margin: '0',
                padding: '0',
                boxSizing: 'border-box',
                // border: '1px solid rgba(0, 0, 0, 0.2)',
            }}
        >
            <img
                src={`https://calil.jp/cover/${isbn}`} alt={title}
                style={{
                    width: '100%',
                    height: 'auto',
                }}
                onLoad={(e) => {
                    const img = e.target as HTMLImageElement;
                    if (img.naturalWidth === 1 && img.naturalHeight === 1) {
                        img.src = 'https://calil.jp/public/img/no-image/noimage.png';
                    }
                }}
            />
        </div>
    )
}
export default Item