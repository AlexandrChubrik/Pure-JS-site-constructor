import image from './assets/image.png'
import {TitleBlock, TextBlock, ColumnsBlock, ImageBlock} from './classes/blocks'


export const model = [
    new TitleBlock('Constructor with pure JS', {
        tag: 'h3',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493245)',
            color : '#fff',
            'text-align': 'center',
            padding: '1.5rem',
        } 
    } ),
    
    new TextBlock('here we go with some text'),

    new ColumnsBlock([
        '1111232131',
        '22222',
        '33333'
    ]),

    new ImageBlock( image, {
        styles: {
            padding: '4rem',
        },
        alt: 'constructor JS',
        imageStyles: {
            width: '500px',
            height: 'auto'
        },

    } )
    
]
