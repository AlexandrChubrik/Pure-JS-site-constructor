import {block} from '../utils'
import { TextBlock } from './blocks'
import { TitleBlock } from './blocks'

export class Sidebar {
    constructor(selector, updateCalback) {
        this.$el = document.querySelector(selector)
        this.update = updateCalback
        this.init()
        
    }

    init() {
        this.$el.insertAdjacentHTML('afterbegin', this.template)
        this.$el.addEventListener('submit', this.add.bind(this))
    }

    get template() {
        return [
            block('template'),
            block('title')
        ].join('')
    }

    add(event) {
        event.preventDefault()

        const type = event.target.name
        const value = event.target.value.value
        const styles = event.target.styles.value

        const newBlock = type === 'text' 
        ?   new TextBlock(value, {styles}) 
        :   new TitleBlock (value, {styles})
        
        this.update(newBlock)
        
        
        event.target.value.value = ''
        event.target.styles.value = ''
    }
}

