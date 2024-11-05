import { useState } from "react"

export const AddCategory = ({ onSubmit}) => {
    const [searchGIFT, setSearchGIFT] = useState()
    const onInputChange = ({ target }) => {
        setSearchGIFT(target.value)
 
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit(searchGIFT)

        setSearchGIFT('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                placeholder="buscas gifts"
                value={searchGIFT}
                onChange={onInputChange} />

        </form>
    )
}
