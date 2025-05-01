
declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        src?: string;
        alt?: string;
        'auto-rotate'?: boolean | string;
        'camera-controls'?: boolean | string;
        'shadow-intensity'?: string;
        poster?: string;
        'environment-image'?: string;
        exposure?: string;
        'animation-name'?: string;
        'animation-crossfade-duration'?: string;
        'ar'?: boolean | string;
        'ar-modes'?: string;
        'ar-scale'?: string;
        'ar-placement'?: string;
        'ios-src'?: string;
        'camera-orbit'?: string;
        'camera-target'?: string;
        'field-of-view'?: string;
        'max-camera-orbit'?: string;
        'min-camera-orbit'?: string;
        'max-field-of-view'?: string;
        'min-field-of-view'?: string;
        'interaction-policy'?: string;
        'interaction-prompt'?: string;
        'interaction-prompt-style'?: string;
        'interaction-prompt-threshold'?: string;
        'orbit-sensitivity'?: string;
        'rotation-per-second'?: string;
        'touch-action'?: string;
        'skybox-image'?: string;
      },
      HTMLElement
    >;
  }
}
