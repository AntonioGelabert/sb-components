/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
  * Este es el mensaje a mostrar en ela etiqueta
  */
    label: string;
    /**
  * este es el tamaño de l aetiqueta
  */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
  * en mayuscula
  */
    allcaps: boolean;
    /**
    * Color...
    */
    color: 'primary' | 'secondary' | 'tertiary';
    fontColor?: string;
    backgroundColor?: string;
}
export declare const MyLabel: ({ allcaps, color, label, size, fontColor, backgroundColor, }: MyLabelProps) => JSX.Element;
