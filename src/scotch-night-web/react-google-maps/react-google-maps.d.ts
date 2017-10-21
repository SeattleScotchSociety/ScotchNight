declare module 'react-google-maps';

export class Circle {
    constructor(props: any, context: any, updater: any);

    componentDidMount(...args: any[]): void;

    componentDidUpdate(prevProps: any, prevState: any): void;

    componentWillUnmount(...args: any[]): void;

    getBounds(...args: any[]): any;

    getCenter(...args: any[]): any;

    getDraggable(...args: any[]): any;

    getEditable(...args: any[]): any;

    getInitialState(): any;

    getMap(...args: any[]): any;

    getRadius(...args: any[]): any;

    getVisible(...args: any[]): any;

    render(): any;

    static contextTypes: {
    };

    static displayName: string;

}

export class DirectionsRenderer {
    constructor(props: any, context: any, updater: any);

    componentDidMount(...args: any[]): void;

    componentDidUpdate(prevProps: any, prevState: any): void;

    componentWillUnmount(...args: any[]): void;

    getDirections(...args: any[]): any;

    getInitialState(): any;

    getPanel(...args: any[]): any;

    getRouteIndex(...args: any[]): any;

    render(): any;

    static contextTypes: {
    };

    static displayName: string;

}

export class FusionTablesLayer {
    constructor(props: any, context: any, updater: any);

    componentDidMount(...args: any[]): void;

    componentDidUpdate(prevProps: any, prevState: any): void;

    componentWillUnmount(...args: any[]): void;

    getInitialState(): any;

    render(): any;

    static contextTypes: {
    };

    static displayName: string;

}

export class GoogleMap {
    constructor(props: any, context: any, updater: any);

    componentDidMount(...args: any[]): void;

    componentDidUpdate(prevProps: any, prevState: any): void;

    componentWillUnmount(...args: any[]): void;

    fitBounds(...args: any[]): any;

    getBounds(...args: any[]): any;

    getCenter(...args: any[]): any;

    getDiv(...args: any[]): any;

    getHeading(...args: any[]): any;

    getInitialState(): any;

    getMapTypeId(...args: any[]): any;

    getProjection(...args: any[]): any;

    getStreetView(...args: any[]): any;

    getTilt(...args: any[]): any;

    getZoom(...args: any[]): any;

    panBy(...args: any[]): any;

    panTo(...args: any[]): any;

    panToBounds(...args: any[]): any;

    render(): any;

    static contextTypes: {
    };

    static displayName: string;

}

export class InfoWindow {
    constructor(props: any, context: any, updater: any);

    componentDidMount(...args: any[]): void;

    componentDidUpdate(prevProps: any, prevState: any): void;

    componentWillReceiveProps(nextProps: any, nextContext: any): void;

    componentWillUnmount(...args: any[]): void;

    getInitialState(): any;

    getPosition(...args: any[]): any;

    getZIndex(...args: any[]): any;

    render(): any;

    static contextTypes: {
    };

    static displayName: string;

}

export class KmlLayer {
    constructor(props: any, context: any, updater: any);

    componentDidMount(...args: any[]): void;

    componentDidUpdate(prevProps: any, prevState: any): void;

    componentWillUnmount(...args: any[]): void;

    getDefaultViewport(...args: any[]): any;

    getInitialState(): any;

    getMetadata(...args: any[]): any;

    getOptions(...args: any[]): any;

    getStatus(...args: any[]): any;

    getUrl(...args: any[]): any;

    getZIndex(...args: any[]): any;

    render(): any;

    static contextTypes: {
    };

    static displayName: string;

}

export class Marker {
    constructor(props: any, context: any, updater: any);

    componentDidMount(...args: any[]): void;

    componentDidUpdate(prevProps: any, prevState: any): void;

    componentWillUnmount(...args: any[]): void;

    getAnimation(...args: any[]): any;

    getAttribution(...args: any[]): any;

    getChildContext(): any;

    getClickable(...args: any[]): any;

    getCursor(...args: any[]): any;

    getDraggable(...args: any[]): any;

    getIcon(...args: any[]): any;

    getInitialState(): any;

    getLabel(...args: any[]): any;

    getOpacity(...args: any[]): any;

    getPlace(...args: any[]): any;

    getPosition(...args: any[]): any;

    getShape(...args: any[]): any;

    getTitle(...args: any[]): any;

    getVisible(...args: any[]): any;

    getZIndex(...args: any[]): any;

    render(): any;

    static childContextTypes: {
    };

    static contextTypes: {
    };

    static displayName: string;

}

export class OverlayView {
    constructor(props: any, context: any, updater: any);

    componentDidMount(...args: any[]): void;

    componentDidUpdate(prevProps: any, prevState: any): void;

    componentWillUnmount(...args: any[]): void;

    draw(): void;

    getInitialState(): any;

    getPanes(...args: any[]): any;

    getProjection(...args: any[]): any;

    onAdd(): void;

    onRemove(): void;

    render(): any;

    static FLOAT_PANE: string;

    static MAP_PANE: string;

    static MARKER_LAYER: string;

    static OVERLAY_LAYER: string;

    static OVERLAY_MOUSE_TARGET: string;

    static contextTypes: {
    };

    static displayName: string;

}

export class Polygon {
    constructor(props: any, context: any, updater: any);

    componentDidMount(...args: any[]): void;

    componentDidUpdate(prevProps: any, prevState: any): void;

    componentWillUnmount(...args: any[]): void;

    getDraggable(...args: any[]): any;

    getEditable(...args: any[]): any;

    getInitialState(): any;

    getPath(...args: any[]): any;

    getPaths(...args: any[]): any;

    getVisible(...args: any[]): any;

    render(): any;

    static contextTypes: {
    };

    static displayName: string;

}

export class Polyline {
    constructor(props: any, context: any, updater: any);

    componentDidMount(...args: any[]): void;

    componentDidUpdate(prevProps: any, prevState: any): void;

    componentWillUnmount(...args: any[]): void;

    getDraggable(...args: any[]): any;

    getEditable(...args: any[]): any;

    getInitialState(): any;

    getPath(...args: any[]): any;

    getVisible(...args: any[]): any;

    render(): any;

    static contextTypes: {
    };

    static displayName: string;

}

export class Rectangle {
    constructor(props: any, context: any, updater: any);

    componentDidMount(...args: any[]): void;

    componentDidUpdate(prevProps: any, prevState: any): void;

    componentWillUnmount(...args: any[]): void;

    getBounds(...args: any[]): any;

    getDraggable(...args: any[]): any;

    getEditable(...args: any[]): any;

    getInitialState(): any;

    getVisible(...args: any[]): any;

    render(): any;

    static contextTypes: {
    };

    static displayName: string;

}

export class StreetViewPanorama {
    constructor(props: any, context: any, updater: any);

    componentDidMount(...args: any[]): void;

    componentDidUpdate(prevProps: any, prevState: any): void;

    componentWillUnmount(...args: any[]): void;

    getChildContext(): any;

    getInitialOptions(): any;

    getInitialState(): any;

    getLinks(...args: any[]): any;

    getLocation(...args: any[]): any;

    getMotionTracking(...args: any[]): any;

    getPano(...args: any[]): any;

    getPhotographerPov(...args: any[]): any;

    getPosition(...args: any[]): any;

    getPov(...args: any[]): any;

    getStatus(...args: any[]): any;

    getVisible(...args: any[]): any;

    getZoom(...args: any[]): any;

    handleComponentMount(el: any): void;

    render(): any;

    static childContextTypes: {
    };

    static contextTypes: {
    };

    static displayName: string;

}

export class TrafficLayer {
    constructor(props: any, context: any, updater: any);

    componentDidMount(...args: any[]): void;

    componentDidUpdate(prevProps: any, prevState: any): void;

    componentWillUnmount(...args: any[]): void;

    getInitialState(): any;

    render(): any;

    static contextTypes: {
    };

    static displayName: string;

}

export function withGoogleMap(WrappedComponent: any, ...args: any[]): any;

export namespace Circle {
    namespace propTypes {
        function center(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultCenter(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultDraggable(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultEditable(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultRadius(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultVisible(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function draggable(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function editable(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function options(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function radius(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function visible(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        namespace center {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultCenter {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultDraggable {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultEditable {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultRadius {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultVisible {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace draggable {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace editable {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace options {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace radius {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace visible {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

    }
}

export namespace DirectionsRenderer {
    namespace propTypes {
        function defaultDirections(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultPanel(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultRouteIndex(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function directions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function options(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function panel(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function routeIndex(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        namespace defaultDirections {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultPanel {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultRouteIndex {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace directions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace options {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace panel {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace routeIndex {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

    }
}

export namespace FusionTablesLayer {
    namespace propTypes {
        function defaultOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function options(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        namespace defaultOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace options {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

    }
}

export namespace GoogleMap {
    namespace propTypes {
        function center(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultCenter(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultHeading(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultMapTypeId(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultStreetView(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultTilt(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultZoom(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function heading(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function mapTypeId(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function options(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function streetView(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function tilt(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function zoom(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        namespace center {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultCenter {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultHeading {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultMapTypeId {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultStreetView {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultTilt {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultZoom {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace heading {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace mapTypeId {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace options {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace streetView {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace tilt {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace zoom {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

    }
}

export namespace InfoWindow {
    namespace propTypes {
        function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultChildren(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultPosition(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultZIndex(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function options(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function position(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function zIndex(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        namespace children {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultChildren {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultPosition {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultZIndex {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace options {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace position {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace zIndex {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

    }
}

export namespace KmlLayer {
    namespace propTypes {
        function defaultDefaultViewport(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultMetadata(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultStatus(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultUrl(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultViewport(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultZIndex(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function metadata(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function options(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function status(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function url(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function zIndex(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        namespace defaultDefaultViewport {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultMetadata {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultStatus {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultUrl {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultViewport {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultZIndex {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace metadata {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace options {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace status {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace url {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace zIndex {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

    }
}

export namespace Marker {
    namespace propTypes {
        function animation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function attribution(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function clickable(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function cursor(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultAnimation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultAttribution(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultClickable(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultCursor(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultDraggable(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultIcon(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultLabel(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultNoRedraw(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultOpacity(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultPlace(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultPosition(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultShape(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultTitle(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultVisible(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultZIndex(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function draggable(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function icon(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function label(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function noRedraw(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function opacity(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function options(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function place(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function position(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function shape(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function title(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function visible(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function zIndex(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        namespace animation {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace attribution {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace clickable {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace cursor {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultAnimation {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultAttribution {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultClickable {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultCursor {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultDraggable {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultIcon {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultLabel {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultNoRedraw {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultOpacity {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultPlace {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultPosition {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultShape {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultTitle {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultVisible {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultZIndex {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace draggable {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace icon {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace label {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace noRedraw {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace opacity {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace options {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace place {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace position {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace shape {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace title {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace visible {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace zIndex {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

    }
}

export namespace OverlayView {
    namespace propTypes {
        function bounds(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultBounds(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultMapPaneName(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultPosition(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function getPixelPositionOffset(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function mapPaneName(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function position(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        namespace bounds {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultBounds {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultMapPaneName {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultPosition {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace getPixelPositionOffset {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace mapPaneName {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace position {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

    }
}

export namespace Polygon {
    namespace propTypes {
        function defaultDraggable(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultEditable(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultPath(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultPaths(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultVisible(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function draggable(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function editable(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function options(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function path(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function paths(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function visible(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        namespace defaultDraggable {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultEditable {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultPath {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultPaths {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultVisible {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace draggable {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace editable {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace options {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace path {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace paths {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace visible {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

    }
}

export namespace Polyline {
    namespace propTypes {
        function defaultDraggable(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultEditable(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultPath(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultVisible(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function draggable(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function editable(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function options(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function path(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function visible(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        namespace defaultDraggable {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultEditable {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultPath {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultVisible {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace draggable {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace editable {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace options {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace path {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace visible {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

    }
}

export namespace Rectangle {
    namespace propTypes {
        function bounds(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultBounds(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultDraggable(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultEditable(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultVisible(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function draggable(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function editable(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function options(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function visible(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        namespace bounds {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultBounds {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultDraggable {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultEditable {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultVisible {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace draggable {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace editable {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace options {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace visible {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

    }
}

export namespace StreetViewPanorama {
    namespace propTypes {
        function defaultLinks(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultMotionTracking(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultPano(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultPanoProvider(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultPosition(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultPov(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultVisible(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function defaultZoom(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function links(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function motionTracking(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function options(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function pano(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function panoProvider(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function position(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function pov(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function visible(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function zoom(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        namespace defaultLinks {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultMotionTracking {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultPano {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultPanoProvider {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultPosition {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultPov {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultVisible {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace defaultZoom {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace links {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace motionTracking {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace options {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace pano {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace panoProvider {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace position {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace pov {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace visible {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace zoom {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

    }
}

export namespace TrafficLayer {
    namespace propTypes {
        function defaultOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        function options(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        namespace defaultOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

        namespace options {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

        }

    }
}

export namespace withGoogleMap {
    const prototype: {
    };

}

