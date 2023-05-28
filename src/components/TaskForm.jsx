import { useState } from 'react';
import { Button, TextArea, List, Form, Header, Icon, Input, Label, Modal, Tab, Table, Checkbox, LabelGroup } from 'semantic-ui-react'
import { createTask, getCurrentUser, modifyTask } from '../services';


const options = [
    { key: 'todo', text: 'To do', value: 'todo' },
    { key: 'doing', text: 'Doing', value: 'doing' },
    { key: 'done', text: 'Done', value: 'done' },
]

export default function TaskForm({task}) {
    
    const [currentTask,setCurrentTask]=useState(task?task:{
        uid:getCurrentUser()._id,
        _id:null,
        titre:null,
        dateModification:null,
        statue: "todo",
        dateLimite:null,
        commentaire:null,
        sousTaches: null,
      })


    const [subtasks, setSubtasks] = useState(currentTask?.sousTaches?.length>=0?currentTask?.sousTaches:[])

    const handleChange = (e, { name, value }) => setCurrentTask({ ...currentTask, [name]: value })
    const handleSubmit= async ()=>{
        console.log("here is what will be saved: ");
        console.log({...currentTask,sousTaches:subtasks,
            dateModification: new Date()});

        task==null?
        await createTask({...currentTask,sousTaches:subtasks,
            dateModification: new Date()}):
            await modifyTask({...currentTask,sousTaches:subtasks,
                dateModification: new Date()})

        console.log({...currentTask,sousTaches:subtasks,
            dateModification: new Date()});
    }
    return (<>
        <Form onSubmit={handleSubmit}>
            <Form.Field
                control={Input}
                label='Task title'
                placeholder='Enter title'
                defaultValue={currentTask.titre}
                name="titre"
                onChange={handleChange}
            />
            <Form.Select
                fluid
                label='Status'
                options={options}
                defaultValue={currentTask.statue?currentTask.statue:"todo"}
                placeholder='Task status'
                name="statue"
                onChange={handleChange}
            />
            <Form.Field
                control={Input}
                type='date'
                label='Deadline'
                defaultValue={currentTask.dateLimite?currentTask.dateLimite:""}
                name="dateLimite"
                onChange={handleChange}
            />
            <Form.Field
                control={Input}
                label='Subtasks'
                placeholder="Add a subtask"
                id='subtaskinput'>
                <input />
                <Button type='button'
                    onClick={() => {
                        setSubtasks([...subtasks, document.getElementById("subtaskinput").value])
                    }}>Add</Button>
            </Form.Field>

            <List divided selection>
                {subtasks.map((x, i) => {
                    return(
                        <List.Item key={i}>
                        <Checkbox label={x} />
                        <Button type='button' floated='right' icon="delete" size='mini' onClick={() => {
                            let l = subtasks.filter((_, index) => index !== i)
                            setSubtasks(l) }} />
                    </List.Item>
                    )
                })}
            </List>
            <Form.Field
                control={TextArea}
                label='Comment'
                placeholder='Talk about this task'
                defaultValue={currentTask.commentaire}
                name="commentaire"
                onChange={handleChange}
            />
            <input id="formButton" type='submit' hidden/>
        </Form>
    </>);
}