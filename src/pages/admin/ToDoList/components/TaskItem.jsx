import {Button, Card, Space, Popover} from "antd";

import "../../../../assets/css/taskItem.css"

import TaskForm from "./TaskForm";

import {deleteTaskAction} from "../../../../redux/actions";

import {useDispatch} from "react-redux";

import {useState} from "react";

function TaskItem({task}) {
    const dispatch = useDispatch();

    const [isShowEditForm, setIsShowEditForm] = useState(false);

    return (
        <Card
            style={{width: "60%", margin: '0 auto'}}
            extra={
                <>
                    <Space>
                        <Button
                            className="btn-edit"
                            type="primary"
                            onClick={() => setIsShowEditForm(!isShowEditForm)}>
                            Sửa
                        </Button>
                        <Popover
                            title={`Bạn muốn xóa ${task.taskName}?`}
                            content={
                                (
                                    <Button
                                        className="btn-delete"
                                        type="primary"
                                        style={{
                                            width: "100%",
                                        }}
                                        onClick={() => dispatch(deleteTaskAction(task.id))
                                        }
                                    >
                                        Xóa
                                    </Button>
                                )
                            }
                            trigger="click"
                        >
                            <Button
                                className="btn-delete"
                                type="primary"
                            >
                                Xóa
                            </Button>
                        </Popover>
                    </Space>
                    {isShowEditForm && (
                        <div className="edit-form-wrap">
                            <TaskForm
                                style={{width: "100%"}}
                                type='edit'
                                task={task}
                                setIsShowEditForm={setIsShowEditForm}
                            />
                        </div>
                    )}
                </>
            }
        >
            <p>
                <span style={{fontWeight: "bold", fontSize: 18}}>Task: </span>
                {task.taskName}
            </p>
            <p>
                <span style={{fontWeight: "bold", fontSize: 18}}>Description: </span>
                {task.description}
            </p>
        </Card>
    )
}

export default TaskItem;