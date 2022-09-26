import PrimitivePlugin from 'sqip-plugin-primitive';

type SqipOptions = {
    input: string | Buffer;
    outputFileName?: string;
    output?: string;
    silent?: boolean;
    parseableOutput?: boolean;
    plugins?: PluginOption[];
    width?: number;
};

type PluginOption = PluginObject | string;

type PluginObject =
    | {
          name: 'sqip-plugin-primitive';
          options?: Partial<PrimitiveOptions>;
      }
    | {
          name: 'sqip-plugin-potrace';
          options?: Partial<PotraceOptions>;
      }
    | {
          name: 'sqip-plugin-blur';
          options?: Partial<BlurOptions>;
      }
    | {
          name: 'sqip-plugin-pixels';
          options?: Partial<PixelsOptions>;
      }
    | {
          name: 'sqip-plugin-svgo';
          options?: Partial<SvgoOptions>;
      }
    | {
          name: 'sqip-plugin-data-uri';
      };

type PotraceOptions = {
    color: string;
    background: string;
    posterize: boolean;
    steps: string[];
    turnPolicy: string;
    turdSize: number;
    alphaMax: number;
    optCurve: boolean;
    optTolerance: number;
    threshold: number;
    blackOnWhite: boolean;
};

export enum PrimitiveMode {
    Combo,
    Triangle,
    Rect,
    Ellipse,
    Circle,
    Rotatedrect,
    Beziers,
    Rotatedellipse,
    Polygon,
}

type PrimitiveOptions = {
    numberOfPrimitives: number;
    mode: PrimitiveMode;
    rep: number;
    alpha: number;
    background: string;
    cores: number;
};

type SvgoOptions = {
    multipass: boolean;
    floatPrecision: number;
};

type PixelsOptions = {
    width: number;
    pixelSize: number;
};

type BlurOptions = {
    blur: number;
};

declare module 'sqip' {
    function sqip(options: SqipOptions): Promise<{
        content: BufferSource;
        metadata: {
            originalWidth: number;
            originalHeight: number;
            palette: object;
            width: number;
            height: number;
            type: 'svg';

            // These will be added by sqip-plugin-data-uri
            dataURI: string;
            dataURIBase64: string;
        };
    }>;
}
