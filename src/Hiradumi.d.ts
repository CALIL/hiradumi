interface Props {
    width: number;
    height: number;
    padding: number;
    className: string;
    items: any[];
    itemHeight: number;
    itemMargin: number;
    itemComponent: any;
    rowCount: number;
    rowRatios: number[];
    sortKey: string | null;
    onScroll: (event: any) => void;
    scrollTo: {
        key: string;
        value: any;
    };
    headerComponent: any;
    headerHeight: number;
    footerComponent: any;
    footerHeight: number;
    innerStyle: any;
}
declare const Hiradumi: (props: Props) => JSX.Element | null;
export default Hiradumi;
