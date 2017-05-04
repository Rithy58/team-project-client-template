import React from 'react';

import Message_Sidebar_User from './message/message_sidebar_user.js';
import Message_Main_User from './message/message_main_user.js';
import Message_ChatInput from './message/message_chatinput.js';
import {getMessageData} from '../server.js';
import {Link} from 'react-router-dom';
import io from 'socket.io-client'

export default class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "user1": {
        "user": {
          "username": ""
        },
        "message": []
      },
      "user2": {
        "user": {
          "username": ""
        },
        "message": []
      }
    };
  }

  componentDidMount() {
    this.socket = io.connect();
    var that = this;
    var newState = this.state;
    this.socket.on('chat', function (data) {
      newState['user1'].message.push(data);
      that.setState(newState);
    });
    this.refresh();
  }

  refresh() {
    getMessageData(1, 1, (feedData) => {
      this.setState(feedData);
    });
  }

  onPost(postContents) {
    this.socket.emit('chat', postContents);

    /*
    postComment(1, 'user1', postContents, () => {
      this.refresh();
    });*/
  }

  render() {
    return (
    <div>
      <div className="container">
       <div className="panel panel-default overall-panel messagecontainerbar" id="over-panel">
         <div className="panel-body">
           <div className="col-md-4">
             <div className="panel panel-default sidebar-panel" id="sidebarPanel">
               <div className="panel-body messgesidebar" id="msg-panel">
                 <div className="input-group chat-users_list">
                   <input type="text" className="form-control" placeholder="Conversation" />
                   <span className="input-group-btn">
                     <button type="submit" className="btn btn-default messagesearchbutton">
                       <span className="glyphicon glyphicon-search"></span>
                     </button>
                   </span>
                 </div>

                 <hr />

                   <Message_Sidebar_User
                     avatar='https://research.fb.com/wp-content/uploads/2016/11/john-vilk.jpg'
                     author='Jeremy Lee'
                     timestamp='Online'
                     numUnread='0'>
                   </Message_Sidebar_User>




               </div>
             </div>
           </div>

           <div className="col-md-8">
             <div className="panel panel-default message-panel" id="msg-panel">
               <div className="panel-body">
                   <p className="header">To: <Link to={"/profile"}>Jeremy Lee</Link></p>

                   <hr />



                   {
                     this.state['user1'].message.map(
                       (message,index) => {return (
                         <div>
                           <Message_Main_User avatar='https://research.fb.com/wp-content/uploads/2016/11/john-vilk.jpg'
                             author="Jeremy Lee"
                             message={message} key={index}/> <hr />
                         </div>

                        )}
                     )
                   }




                   <p className="currently_typing">
                     Jeremy Lee is typing...
                   </p>

                   <Message_ChatInput onPost={(postContents) => this.onPost(postContents)}/>


               </div>
             </div>
           </div>

        </div>
       </div>
     </div>
   </div>

    )
  }
}
