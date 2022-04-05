import 'whatwg-fetch';
import { Component } from 'react';
interface App {
    factors: number[];
    settingUI: any;
}
interface Props {
}
interface State {
    items: any[];
    width: number;
    height: number;
    padding: number;
    itemHeight: number;
    itemMargin: number;
    rowCount: number;
    sortKey: string | null;
    rowRatios: number[] | null;
    scrollTo: {
        key: string;
        value: any;
    } | null;
    showHiradumi: boolean;
}
declare class App extends Component<Props, State> {
    constructor(props: Props);
    componentDidMount(): void;
    onChange(state: State): void;
    render(): JSX.Element;
}
export default App;
