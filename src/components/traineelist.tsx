import './traineelist.type.css'
import { ITrainee } from './trainee.type'


type Props = {
    list : ITrainee[];
}

const TraineeList = (props: Props) => {
    const {list} = props;

    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>ContactNumber</th>
                    <th>Action Name</th>
                </tr>
                {list.map((trainee)=> {
                    return (
                            <tr key = {trainee.id}>
                                <td>{trainee.name}</td>
                                <td>{trainee.email}</td>
                                <td>{trainee.address}</td>
                                <td>{trainee.contactno}</td>
                                <td>
                                    <div>
                                        <input type = "button" value= "View"/>
                                        <input type = "button" value= "Edit"/>
                                        <input type = "button" value= "Delete"/>

                                    </div>
                                </td>

                            </tr>
                    );
                })}
            </table>
        </div>
    )
}

export default TraineeList;