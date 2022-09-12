import React, {ReactNode} from 'react'

type Props = {
    name: string
}

const  Component: React.FC<Props> = ({name}) : ReactNode => {
    return (
        <h1>{name}</h1>
    )
}

const  ComponentTwo: React.FC = ({name} : Props) : ReactNode => {
    return (
        <h1>{name}</h1>
    )
}

export default Component;