import { useState } from "react"

const FunctionalComponent = ({nama}) => {
    const [value, setValue] = useState(1)

    return (
        <div>
            <h1>ini tugas adalah {nama}</h1>
            <span>ke {value}</span>
        </div>
    )
}

export default FunctionalComponent