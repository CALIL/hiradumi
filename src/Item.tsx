import { useState } from 'react'
import type { ItemType } from './layoutCalculator'

type Props = {
    item: ItemType
}

const Item = (props: Props) => {
    const { type = 'image', title, isbn, width, height, aspect } = props.item
    const [loadError, setLoadError] = useState(false)
    return (
        <div
            style={{
                display: 'inline-block',
                width: width,
                height: height,
                // backgroundColor: 'rgba(0, 0, 0, 0.1)',
                margin: '0',
                padding: '0',
                boxSizing: 'border-box',
                border: '1px solid rgba(0, 0, 0, 0.1)',
            }}
        >
            {type=='text' ? (
                <div
                    className="textItem"
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {title}
                </div>
            ) : (loadError ? (
                <div
                    className="noImageItem"
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.05)',
                    }}
                >No Image</div>
                ) : (
                    <img
                        className="coverItem"
                        src={`https://calil.jp/cover/${isbn}`} alt={title}
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        data-aspect={aspect}
                        onLoad={(e) => {
                            const img = e.target as HTMLImageElement;
                            if (img.naturalWidth === 1 && img.naturalHeight === 1) {
                                setLoadError(true);
                            }
                        }}
                        onError={() => {
                            setLoadError(true);
                        }}
                    />
                )
            )}
        </div>
    )
}
export default Item