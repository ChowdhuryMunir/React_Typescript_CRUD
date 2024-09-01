import { useState } from "react";
import { ITrainee } from "./trainee.type";


type Props = {
    onBackBtnClickHandler : () => void;
    onSubmitClickHandler: (data: ITrainee) => void;
}

const AddTrainee = (props: Props) => {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [contactno, setContactNo] = useState("")

    const {onBackBtnClickHandler, onSubmitClickHandler} = props;

    const onNameChangeHandler = (e: any) => {
        setName(e.target.value);
    }
    const onEmailChangeHandler = (e: any) => {
        setEmail(e.target.value);
    }
    const onAddressChangeHandler = (e: any) => {
        setAddress(e.target.value);
    }
    const onContactNoChangeHandler = (e: any) => {
        setContactNo(e.target.value);
    }

    const onSubmitBtnClickHandler = (e: any) =>{
        e.preventDefault();
        const data: ITrainee = {
            id: id,
            name: name,
            email: email,
            address: address,
            contactno: contactno
        };
        onSubmitClickHandler(data);
        onBackBtnClickHandler();
    };

    return(
        <div>
            <div>
            <h2> Add Trainee</h2>
            </div>

            <form onSubmit={onSubmitBtnClickHandler}>
                <div>
                    <label> Name</label>
                    <input type="text" value={name} onChange={onNameChangeHandler} />
                </div>
                <div>
                    <label> Email</label>
                    <input type="text" value={email} onChange={onEmailChangeHandler} />
                </div>
                <div>
                    <label> Address</label>
                    <input type="text" value={address} onChange={onAddressChangeHandler} />
                </div>
                <div>
                    <label> Contact</label>
                    <input type="text" value={contactno} onChange={onContactNoChangeHandler} />
                </div>
                <div>
                    <input type= "button" value="Back" onClick={onBackBtnClickHandler} />
                    <input type= "button" value="Add Trainee" onClick={onSubmitBtnClickHandler}/>
                </div>
            </form>


        </div>
        
    );

}

export default AddTrainee;

