import { useEffect, useState } from "react";
import "./home.style.css"
import { ITrainee, PageEnum  } from "./trainee.type"; // setTraineeList was added here
import TraineeList from "./traineelist";
import AddTrainee from "./addtrainee";





const Home = () => {

    const [traineeList, setTraineeList] = useState( [] as ITrainee[]);
    const [shownPage, setShownPAge] = useState(PageEnum.list);


    useEffect(()=>{
        const listInString = window.localStorage.getItem("TraineeList")
        if (listInString) {
            _setTraineeList(JSON.parse(listInString));
        }
    })
    
    const onAddTraineeClickHandler =()=> {
        setShownPAge(PageEnum.add);
    }
    const showListPage= ()=>{
        setShownPAge(PageEnum.list);
    }
     const _setTraineeList =(list: ITrainee[])=> {
            setTraineeList(list);
            window.localStorage.setItem("TraineeList", JSON.stringify(list));
     }


     const addTrainee = (data: ITrainee) =>{
            _setTraineeList([...traineeList,data])
     }
     

 return (
    <>
        <article>
            <header>
                <h2> Trainee Information</h2>
            </header>
        </article>

        <section>
            {
                shownPage === PageEnum.list && (
                    <>
                        <input type="button" value="Add Trainee" onClick={onAddTraineeClickHandler} />
                    </>
                )
            }
            {shownPage === PageEnum.add && <AddTrainee onBackBtnClickHandler= {showListPage} onSubmitClickHandler= {addTrainee} />}
        </section>
        <TraineeList list ={traineeList} />
</>
 );
};

export default Home;