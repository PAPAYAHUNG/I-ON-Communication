import React from 'react'

export const transformType = (element:string): React.ElementType=>{
switch (element){
    case 'Paragraph': return 'p'
    case 'Button': return 'button'
    default: return 'div'
}
}