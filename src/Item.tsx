import { useState } from 'react'
import type { ItemType } from './layoutCalculator'

type Props = {
    item: ItemType
}

const Item = (props: Props) => {
    const { type = 'image', title, isbn, width, height } = props.item
    const [loadError, setLoadError] = useState(false)
    return (
        <div
            style={{
                display: 'inline-block',
                width: width,
                height: height,
                border: '1px solid rgba(0, 0, 0, 0.1)',
            }}
        >
            {type=='text' ? (
                <TextItem title={title} />
            ) : (loadError ? (
                    <NoImageItem />
                ) : (
                    <ImageItem
                        src={`https://calil.jp/cover/${isbn}`}
                        alt={title}
                        onError={() => {
                            setLoadError(true)
                        }}
                    />
                )
            )}
        </div>
    )
}
export default Item

const TextItem = ({title} : {title: string}) => (
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
)

const ImageItem = ({src, alt, onError} : {src: string, alt: string, onError: () => void}) => (
    <img
        className="coverItem"
        src={src} alt={alt}
        style={{
            width: '100%',
            height: '100%',
        }}
        onLoad={(e) => {
            const img = e.target as HTMLImageElement;
            if (img.naturalWidth === 1 && img.naturalHeight === 1) {
                onError()
            }
        }}
        onError={() => {
            onError()
        }}
    />
)

const NoImageItem = () => (
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
)