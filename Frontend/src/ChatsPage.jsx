import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    
    return (
    <div style={{height:"100vh"}}>
        <PrettyChatWindow 
        projectId='2577fe74-a112-4ec2-87ef-45eaac8b62a4'
        username={props.user.username}
        secret={props.user.secret}
        style={{height:"100%"}}
        />
    </div>
    )
    
}

export default ChatsPage