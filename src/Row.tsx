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
                            aspectRatio: item.properties?.aspect ? item.properties.aspect : 'auto',
                        }}
                        />
                    </div>
                )
            })}
        </div>
    );
}

export default Row;