import React from 'react';
const Item = (props) => {
    const item = props.item;
    const fontSize = (props.item.width - props.margin) / 14;
    const sortKeySize = props.item.height / 7;
    return (React.createElement("a", { href: 'https://calil.jp/book/' + props.item.isbn, target: "_blank", style: {
            display: 'inline-block',
            width: '100%',
            height: '100%',
        } },
        item.cover ? (React.createElement("img", { src: item.cover, alt: item.title, "data-aspect": item.properties.aspect })) : (React.createElement("div", { className: "nocover" },
            React.createElement("div", { className: "bg" }),
            React.createElement("div", { className: "textCover" }, item.height > 100 ? (React.createElement(React.Fragment, null,
                React.createElement("div", { className: "title", style: { fontSize: fontSize + 'px' } }, item.title),
                React.createElement("div", { className: "author", style: { fontSize: fontSize * 0.7 + 'px' } }, item.author))) : null))),
        props.sortKey && item[props.sortKey] > 0 && item.height > 100 ? (React.createElement("span", { className: "sortKey", style: {
                opacity: item[props.sortKey] / 2 + 0.1,
                fontSize: fontSize + 'px',
                width: sortKeySize + 'px',
                height: sortKeySize + 'px',
                right: sortKeySize / 4,
                bottom: sortKeySize / 4,
            } }, item[props.sortKey])) : null));
};
export default Item;
