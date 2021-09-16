import React from 'react'

interface Props {
    item: any
    margin: number
    sortKey: string | null
}

const Item = (props: Props) => {

    const item = props.item
    const fontSize = (props.item.width - props.margin) / 14
    const sortKeySize = props.item.height / 7
    return (<a href={'https://calil.jp/book/' + props.item.isbn} target="_blank" style={{
        display: 'inline-block',
        width: '100%',
        height: '100%',
    }}>
        {item.cover ? (
            <img src={item.cover}
                alt={item.title}
                data-aspect={item.properties.aspect}
            />
        ) : (
            <div className="nocover">
                <div className="bg"></div>
                <div className="textCover">
                    {item.height > 100 ? (
                        <React.Fragment>
                            <div className="title" style={{ fontSize: fontSize + 'px' }}>{item.title}</div>
                            <div className="author" style={{ fontSize: fontSize * 0.7 + 'px' }}>{item.author}</div>
                        </React.Fragment>
                    ) : null}
                </div>
            </div>
        )}
        {props.sortKey && item[props.sortKey] > 0 && item.height > 100 ? (
                <span className="sortKey" style={{
                    opacity: item[props.sortKey] / 2 + 0.1,
                    fontSize: fontSize + 'px',
                    width: sortKeySize + 'px',
                    height: sortKeySize + 'px',
                    right: sortKeySize / 4,
                    bottom: sortKeySize / 4,
                }}>{item[props.sortKey]}</span>
            ) : null}
    </a>)
}

export default Item