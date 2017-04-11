import React from 'react';

import Message_Sidebar_User from './message_sidebar_user.js';
import Message_Main_User from './message_main_user.js';
import Message_ChatInput from './message_chatinput.js';
import Navbar from './navbar.js';
import {getMessageData, postComment} from '../server.js';

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
    this.refresh();
  }

  refresh() {
    getMessageData(1, 1, (feedData) => {
      this.setState(feedData);
    });
  }

  onPost(postContents) {
    postComment(1, 'user1', postContents, () => {
      this.refresh();
    });
  }

  render() {
    return (
    <div>
     <Navbar />
      <div className="container">
       <div className="panel panel-default overall-panel messagecontainerbar" id="over-panel">
         <div className="panel-body">
           <div className="col-md-4">
             <div className="panel panel-default sidebar-panel" id="sidebarPanel">
               <div className="panel-body messgesidebar">
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
                     author='John Vilk'
                     timestamp='10 minutes ago'
                     numUnread='2'>
                   </Message_Sidebar_User>




               </div>
             </div>
           </div>

           <div className="col-md-8">
             <div className="panel panel-default message-panel" id="msg-panel">
               <div className="panel-body">
                   <p className="header">To: <a href="#">{this.state['user2'].user.username}</a></p>

                   <hr />

                   {
                     this.state['user2'].message.map(
                       (message,index) => {return (
                         <div>
                           <Message_Main_User avatar='https://research.fb.com/wp-content/uploads/2016/11/john-vilk.jpg'
                             author={this.state['user2'].user.username}
                             message={message} key={index}/> <hr />
                         </div>

                        )}
                     )
                   }

                   {
                     this.state['user1'].message.map(
                       (message,index) => {return (
                         <div>
                           <Message_Main_User avatar='https://research.fb.com/wp-content/uploads/2016/11/john-vilk.jpg'
                             author={this.state['user1'].user.username}
                             message={message} key={index}/> <hr />
                         </div>

                        )}
                     )
                   }




                   <p className="currently_typing">
                     John Vilk is typing...
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
