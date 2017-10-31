declare module "react-star-ratings";

export default class StarRatings {
    constructor(props: any, context: any, updater: any);

    componentDidMount(...args: any[]): void;

    componentDidUpdate(prevProps: any, prevState: any): void;

    componentWillUnmount(...args: any[]): void;

    highlightStar(starRating: number): void;

    unHighlightStar(): void;

    render(): any;
}

export class Star {
    constructor(props: any, context: any, updater: any);

    componentDidMount(...args: any[]): void;

    componentDidUpdate(prevProps: any, prevState: any): void;

    componentWillUnmount(...args: any[]): void;

    highlightStar(): void;

    unHighlightStar(): void;

    changeRating(): void;

    render(): void;
}