import 'whatwg-fetch';
import { Component } from 'react';
interface App {
    factors: number[];
    settingUI: any;
}
interface Props {
    items: any[];
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
    render(): JSX.Element | null;
}
export default App;
