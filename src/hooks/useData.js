import {useState} from "react";


export const useData = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [personalData, setPersonalData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')


    const handleChangeNameValue = (e) => {
        setName(e.target.value);
    }
    const handleChangePhoneValue = (e) => {
        setPhone(e.target.value);
    }
    const handleChangeEmailValue = (e) => {
        setEmail(e.target.value);
    }

    const submitFormHandler = (e) => {
        e.preventDefault();
        if (name.trim() && phone.trim() && email.trim()) {
            setPersonalData([...personalData, {id: personalData.length + 1, name: name, phone: phone, email: email}]);
            setName('')
            setPhone('')
            setEmail('')
        } else {
            alert("please enter all data")
        }
    }
    const searchHandler = (e) => {
        setSearchTerm(e.target.value)
    }

    return {
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
    }
}
