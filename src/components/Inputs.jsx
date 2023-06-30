import '../css/Inputs.css'

export const Inputs = ({name, phone, email, onchangeName,onchangePhone,onchangeEmail,submit,search,onchangeSearch}) => {


    return (
        <div className='contact_inputs'>
            <form className='contact_inputs_structure' onSubmit={submit}>
                <input className='contact_searchBox' placeholder=' search...' value={search} onChange={onchangeSearch}/>
                <div className='contact_PersonalInformation'>
                    <input className='contact_data' placeholder=' Name' value={name} onChange= {onchangeName}  type='text'/>
                    <input className='contact_data' placeholder=' Phone' value={phone} onChange={onchangePhone} type='tel'/>
                    <input className='contact_data' placeholder=' Email' value={email} onChange={onchangeEmail} type='email'/>
                </div>
                <button className='contact_button' type="submit">Add</button>
            </form>
            <div className='contact_title'>
                <div className='contact_eachTitle'>
                    <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/person-male.png" alt="person-male"/>
                    <div className='contact_title_name'>Name</div>
                </div>
                <div className='contact_eachTitle'>
                    <img width="20" height="20" src="https://img.icons8.com/material-outlined/24/phone.png" alt="phone"/>
                    <div className='contact_title_name'>Phone</div>
                </div>
                <div className='contact_eachTitle'>
                    <img width="20" height="20" src="https://img.icons8.com/material-sharp/24/new-post.png" alt="new-post"/>
                    <div className='contact_title_name'>Email</div>
                </div>
            </div>
            <div className='contact_horizontalLine'></div>
        </div>

    )
}