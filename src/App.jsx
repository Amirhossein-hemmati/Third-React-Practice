import {Inputs} from "./components/Inputs.jsx";
import './App.css'
import {useData} from "./hooks/useData.js";
import {List} from "./components/List.jsx";

function App() {
    const {
        name,
        phone,
        email,
        personalData,
        searchTerm,
        handleChangeNameValue,
        handleChangePhoneValue,
        handleChangeEmailValue,
        submitFormHandler,
        searchHandler,
    } = useData()

    return (
        <div className='contact'>
            <Inputs name={name}
                    phone={phone}
                    email={email}
                    search={searchTerm}
                    onchangeName={handleChangeNameValue}
                    onchangePhone={handleChangePhoneValue}
                    onchangeEmail={handleChangeEmailValue}
                    submit={submitFormHandler}
                    onchangeSearch={searchHandler}
            />
            <List personalData={personalData}
                  searchTerm={searchTerm}

            />
        </div>
    )
}

export default App
