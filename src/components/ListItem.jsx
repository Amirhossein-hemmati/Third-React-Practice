


export const ListItem = ({personalData,searchTerm,id}) => {
    const index = personalData.name.indexOf(searchTerm);

    return (
        <div className='contact_information' key={id}>
            <div className='contact_items'>
                <span className='contact_item'>
                    {personalData.name}
                </span>
            </div>
            <div className='contact_items'>
                <span className='contact_item'>{personalData.phone}</span>
            </div>
            <div className='contact_items'>
                <span className='contact_item'>{personalData.email}</span>
            </div>

        </div>
    )
}