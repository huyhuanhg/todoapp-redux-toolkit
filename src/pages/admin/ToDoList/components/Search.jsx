import {Input} from "antd";

import "../../../../assets/css/taskSearch.css"

function Search({setSearchKey}) {
    return (
        <Input
            placeholder="Tìm kiếm"
            className="search-element"
            onChange={(e) => {
                setSearchKey(e.target.value)
            }}
        />
    )
}

export default Search;