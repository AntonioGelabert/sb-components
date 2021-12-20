import React from 'react'
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
color:'primary' | 'secondary' | 'tertiary';


fontColor?: string;

}

export const MyLabel = ({
    allcaps = false, 
    color   = 'primary',
    label   = 'no label', 
    size    ='h1',
    fontColor = '#5517ac'
} : MyLabelProps) => {
    return (
        <span className={`label ${size} text-${color}`}
        style={{color: fontColor}} >
            {allcaps ? label.toUpperCase() : label}
        </span>
    )
}
