declare module '*.scss' {
    const content: { readonly [key: string]: string };
    export default content;
}

declare module '*.svg' {
    import * as React from 'react';
    const SVG: React.FC<React.SVGProps<SVGSVGElement>>
    export default SVG
}
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';

declare const __IS_DEV__: boolean


