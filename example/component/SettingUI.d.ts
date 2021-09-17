import { Component } from 'react';
interface Props {
    itemHeight: number;
    width: number;
    padding: number;
    itemMargin: number;
    rowCount: number;
    rowRatios: number[] | null;
    sortKey: string | null;
    onChange: (state: any) => void;
}
interface State {
}
declare class SettingUI extends Component<Props, State> {
    constructor(props: Props);
    setRowHeight(): void;
    copy(): void;
    setSortKey(sortKeyCheckBox: any): void;
    setRowFactors(): void;
    render(): JSX.Element;
}
export default SettingUI;
