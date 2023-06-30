import '../css/List.css'
import {ListItem} from "./ListItem.jsx";

export const List = ({personalData, searchTerm}) => {
    return (
        <div className='contact_list'>
            {personalData
                .filter((personalData) => personalData.name.includes(searchTerm))
                .map((personalData, id) => <ListItem personalData={personalData} id={id} searchTerm={searchTerm}/>

                )}


        </div>

    )
}