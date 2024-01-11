import {useEffect} from 'react'
//Creating the custom hook
function useDoctitle(count) {
    useEffect(() => {
        document.title =   `Count ${count}`
    }, [count])
}

export default useDoctitle