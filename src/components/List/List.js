import './List.scss'
export const List = ({children}) => {

    return (
        <ul className=" mx-auto mt-4 list-group">
            {children}
        </ul>
        )
 }
