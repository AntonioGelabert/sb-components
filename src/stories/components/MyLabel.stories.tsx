import { MyLabel } from '../../components/MyLabel';
import { ComponentMeta, ComponentStory } from '@storybook/react';


export default {
    title: 'Example/MyLabel',
    component: MyLabel,
    argTypes: {
        size: {control: 'select', options: ['normal', ['h1']]},
        color: {control: 'select'}
    }
}  as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel{...args}/>

export const Basic = Template.bind({});
Basic.args = {
    size: 'h1',
    allcaps: false  // capitalizar toda la palabra                              
}
export const AllCaps = Template.bind({});
AllCaps.args = {
    size: 'normal',
    allcaps: true
}
export const Secondary = Template.bind({});
 Secondary.args = {
     size: 'normal',
     color: 'secondary' // primary | secondary | terciary
 }
 export const Tertiary = Template.bind({});
 Tertiary.args = {
     size: 'h1',
     fontColor: '#5517ac'
 }
 export const CustomBackgroundColor = Template.bind({});
 CustomBackgroundColor.args = {
     size: 'h1',
     fontColor: 'white',
    backgroundColor: 'black' 
 }
 //CustomFontColor
 // fontColor: #5517ac
 // size: h1
