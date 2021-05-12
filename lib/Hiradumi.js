import 'whatwg-fetch';
import React from 'react';
import { FixedSizeList as List } from "react-window"; // import HiradumiRow from './HiradumiRow'

class Hiradumi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rowsData: []
    };
    this.factors = [];
    this.hiradumiDiv = null;

    this.setHiradumiDiv = element => {
      this.hiradumiDiv = element;
    };
  }

  componentDidMount() {
    this.setRowData(); // PC版のスクロールバー対応
    // コンテンツがないとスクロールバーが出ないので、追加後に再計算
    // setTimeout(() => {
    //     const scrollBarWidth = window.innerWidth - document.body.clientWidth
    //     if (scrollBarWidth > 0) this.setRowData()
    // }, 10)

    window.addEventListener('resize', this.setRowData.bind(this));
  }

  setRowData() {
    this.factors = [];
    const rowCount = this.props.rowCount === Infinity ? 10000000 : this.props.rowCount;
    Array.from({
      length: rowCount
    }).map((notValue, i) => {
      const index = i % this.props.rowFactors.length;
      this.factors.push(this.props.rowFactors[index]);
    }); // 計算している本のindex

    let currentIndex = 0;
    const scrollBarWidth = window.innerWidth - document.body.clientWidth;
    const hiradumiWidth = this.hiradumiDiv.clientWidth - scrollBarWidth;
    const rowsData = [];
    this.factors.some((notValue, index) => {
      // 行の横幅
      let rowWidth = 0; // 行の高さ

      let height = this.props.size * this.factors[index]; // 一行に入る数

      let columnCount = 0;
      const currentIndexData = this.props.items.slice(currentIndex);
      currentIndexData.some(item => {
        let width;
        let isRowLastItem = false;

        if (item.properties && item.properties.aspect) {
          width = Math.floor(height * item.properties.aspect);
          isRowLastItem = hiradumiWidth <= rowWidth + width;
        } else {
          width = Math.floor(height * 0.66666);
          isRowLastItem = hiradumiWidth <= rowWidth + width;
        } // 行の最後のアイテムなら終了


        if (isRowLastItem) return true;
        item.height = height;
        item.width = width;
        rowWidth += width;
        columnCount += 1;
      });
      if (columnCount === 0) return true;
      let rowData; // 残りの横幅分、サイズを調整

      const scaleUpRatio = hiradumiWidth / rowWidth; // 最後の行の縦が大きすぎないように規制

      if (scaleUpRatio < 2) {
        currentIndexData.some((item, index) => {
          if (index === columnCount) return true;
          item.width = Math.floor(item.width * scaleUpRatio);
          item.height = Math.floor(item.height * scaleUpRatio);
        });
        rowData = this.props.items.slice(currentIndex, currentIndex + columnCount);
      } else {
        // 前の行の調整
        const prevRowData = this.props.items.slice(currentIndex - rowsData[rowsData.length - 1].length, currentIndex); // rowWidth分詰めたい

        const scaleDownWidth = rowWidth / prevRowData.length;
        prevRowData.some(item => {
          item.width = Math.floor(item.width - scaleDownWidth);
          const scaleDownRatio = item.width / (item.width + scaleDownWidth);
          item.height = Math.floor(item.height * scaleDownRatio);
        }); // 今の行のサイズを調整

        const tempRowData = this.props.items.slice(currentIndex, currentIndex + columnCount);
        const scaleRatio = prevRowData[0].height / tempRowData[0].height;
        tempRowData.some(item => {
          item.width = Math.floor(item.width * scaleRatio);
          item.height = Math.floor(item.height * scaleRatio);
        });
        rowsData.pop();
        rowData = this.props.items.slice(currentIndex - prevRowData.length, currentIndex + columnCount);
      } // sortLabelでソートして、中央から並べ直す


      if (this.props.sortKey) {
        const sortLabel = this.props.sortKey;
        rowData.sort(function (a, b) {
          if (a[sortLabel] < b[sortLabel]) return 1;
          if (a[sortLabel] > b[sortLabel]) return -1;
          return 0;
        });
        const newRowData = {};
        const rowLength = rowData.length;
        const centerIndex = Math.floor(rowLength / 2);
        newRowData[centerIndex] = rowData[0];
        Array.from({
          length: centerIndex
        }).map((item, index) => {
          if (rowData[index * 2 + 1]) newRowData[centerIndex - 1 - index] = rowData[index * 2 + 1];
          if (rowData[index * 2 + 2]) newRowData[centerIndex + 1 + index] = rowData[index * 2 + 2];
        });
        rowData = Object.values(newRowData);
      }

      rowsData.push(rowData);
      currentIndex += columnCount;
    });
    this.setState({
      rowsData
    });
  }

  render() {
    if (this.props.items.length === 0) return null;

    const Row = ({
      index,
      style
    }) => {
      const rowStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
      };
      return /*#__PURE__*/React.createElement("div", {
        className: "row",
        style: Object.assign(rowStyle, style)
      }, this.state.rowsData[index].map(item => {
        return /*#__PURE__*/React.createElement(this.props.itemComponent, {
          item: item,
          margin: this.props.margin,
          sortKey: this.props.sortKey
        });
      }));
    };

    return /*#__PURE__*/React.createElement("div", {
      className: this.props.className ? this.props.className : 'hiradumi',
      ref: this.setHiradumiDiv
    }, /*#__PURE__*/React.createElement(List, {
      height: 700,
      itemCount: this.state.rowsData.length,
      itemSize: 200,
      width: document.body.clientWidth
    }, Row));
  }

}

export default Hiradumi;