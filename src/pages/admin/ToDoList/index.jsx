import '../../../assets/css/toDoList.css';

import {Card} from 'antd';

import "antd/dist/antd.css";

import TaskItem from "./components/TaskItem";
import TaskForm from "./components/TaskForm";
import Search from "./components/Search";

import {useSelector} from "react-redux";
import {useState} from "react";

function ToDoListPage() {
    const {taskList} = useSelector(({tasks}) => tasks)
    const [searchKey, setSearchKey] = useState('');

    const filterTask = taskList.filter(task => task.taskName.toLowerCase().indexOf(searchKey.toLowerCase()) !== -1)

    const rederTaskList = () => {
        if (filterTask.length > 0) {
            return filterTask.map((task, index) => {
                return (
                    <TaskItem task={task} key={index}/>
                )
            })
        } else {
            return (
                <p>
                    Không có công việc nào!
                </p>
            )
        }
    }
    return (
        <div className="to-do-list">
            <div className={'task-list-header'}>
                <Card
                    title="To do list App"
                    style={{
                        width: "60%",
                        margin: '0 auto'
                    }}
                >
                    <TaskForm type="add"/>
                </Card>
                <Search setSearchKey={setSearchKey}/>
            </div>
            <div className="task-list">
                {rederTaskList()}
            </div>
        </div>
    );
}

export default ToDoListPage;