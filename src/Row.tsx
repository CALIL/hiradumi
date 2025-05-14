type Props = {
     index: number,
     data: any
}

const Row = ({ index, data }: Props) => {
    return (
        <div
            key={index}
            style={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            {data.map((item: any, i: number) => {
                return (
                    <div
                        key={i}
                        style={{
                        }}
                    >
                        <img
                            src={`https://calil.jp/cover/${item.isbn}`} alt={item.title}
                            style={{
                                width: '100%',
                                height: 'auto',
                                // aspectRatio: item.properties?.aspect ? item.properties.aspect : 'auto',
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
            })}
        </div>
    );
}

export default Row;