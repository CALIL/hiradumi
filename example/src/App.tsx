import React, {useEffect, useState} from 'react';
import Hiradumi from 'hiradumi';

const HiradumiView = (props) => {
    const [items, setItems] = useState([])
    const [height, setHeight] = useState(window.innerHeight)
    const [width, setWidth] = useState(window.innerWidth)
    const setSize = () => {
        setHeight(window.innerHeight)
        setWidth(window.innerWidth)
    }
    useEffect(() => {
        document.body.parentNode.style.overflow = 'hidden'
        fetch('https://bookdata-fair.calil.dev/all.json').then((r) => r.json()).then((r) => {
            setItems(r)
            setSize()
        })

        // iPhoneでピンチでズームすると崩れる対策
        document.body.addEventListener('touchstart', function(e){
            if (e.touches && e.touches.length > 1) e.preventDefault()
        }, {passive: false})
        document.body.addEventListener('touchmove', function(e){
            if (e.touches && e.touches.length > 1) e.preventDefault()
        }, {passive: false})
        const userAgent = navigator.userAgent
        window.addEventListener('resize', () => {
            // iOSのスクロールで、アドレスバーが縮小し、resizeイベントが発生する対策
            if (userAgent.indexOf('iPhone') >= 0 || userAgent.indexOf('iPad') >= 0) return
            setTimeout(setSize.bind(this), 100)
            const width = window.innerWidth
            setTimeout(() => {
                if (width !== window.innerHeight) setSize()
            }, 500)

        })
        window.addEventListener('orientationchange', () => {
            setTimeout(setSize.bind(this), 100)
        })

        return () => {
            document.body.parentNode.style.overflow = 'auto'
        }

    }, [true]);

    let rowRatios
    if (document.body.clientWidth > 767) {
        rowRatios = [1, 0.9, 0.8, 0.7]
    } else {
        rowRatios = [0.97, 0.75, 0.65, 0.55]
    }

    return (
        <Hiradumi
            width={width}
            height={height}
            items={items}
            padding={10}
            itemHeight={200}
            itemMargin={10}
            rowCount={Infinity}
            rowRatios={rowRatios}
            // itemComponent={Item}
            className={'hiradumi'}
            sortKey={null}
            onScroll={(e) => {}}
            // headerComponent={null}
            // headerHeight={50}
            // footerComponent={null}
            // footerHeight={50}
            innerStyle={
                {
                // backgroundColor: 'red'
                }
            }
            // @ts-ignore
            // scrollTo={}
        />
    )
}

export default HiradumiView