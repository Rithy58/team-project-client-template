import React from 'react';

import Message_Sidebar_User from './message_sidebar_user.js'
import Message_Main_User from './message_main_user.js'
import Navbar from './navbar.js';

export default class Message extends React.Component {
  render() {
    return (
    <div>
     <Navbar />
      <div className="container">
       <div className="panel panel-default overall-panel" id="over-panel">
         <div className="panel-body">
           <div className="col-md-4">
             <div className="panel panel-default sidebar-panel" id="sidebarPanel">
               <div className="panel-body">
                 <div className="input-group chat-users_list">
                   <input type="text" className="form-control" placeholder="Conversation" />
                   <span className="input-group-btn">
                     <button type="submit" className="btn btn-default">
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


                   <hr />

                   <Message_Sidebar_User
                     avatar='http://www.btsh.org/bruise/wp-content/uploads/2015/10/Jason-Vorhees-goalie-mask.jpg'
                     author='Jason Voorhees'
                     timestamp='About a minute ago'
                     numUnread='1'>
                   </Message_Sidebar_User>

                   <hr />

                  <Message_Sidebar_User
                    avatar='https://lh3.googleusercontent.com/-ujpM2R7HEOU/AAAAAAAAAAI/AAAAAAAAAAA/vrTI-uxMiPM/photo.jpg'
                    author='Andrew Nyugen'
                    timestamp='20 minutes ago'
                    numUnread='3'>
                  </Message_Sidebar_User>

                  <hr />

                  <Message_Sidebar_User
                    avatar='https://media.licdn.com/mpr/mpr/shrink_100_100/AAEAAQAAAAAAAAQnAAAAJDY0NmYzYTBiLTQ5NDEtNGNlNi05OGI2LTNhODE3NmRiYjUyZA.jpg'
                    author='Colin Stern'
                    timestamp='15 minutes ago'
                    numUnread='2'>
                  </Message_Sidebar_User>

               </div>
             </div>
           </div>

           <div className="col-md-8">
             <div className="panel panel-default message-panel" id="msg-panel">
               <div className="panel-body">
                   <p className="header">To: <a href="#">John Vilk</a></p>

                   <hr />

                   <Message_Main_User
                     avatar='https://research.fb.com/wp-content/uploads/2016/11/john-vilk.jpg'
                     author='John Vilk'
                     message='Hey! I would love to trade my CS240 book for your CS 230 book.'
                     timestamp='10 minutes ago'>
                   </Message_Main_User>

                   <hr />

                   <Message_Main_User
                     avatar='https://lh3.googleusercontent.com/-O3uItRCeaqE/AAAAAAAAAAI/AAAAAAAAAAA/lFpDmKhZ7Z4/photo.jpg'
                     author='Raj Naryan'
                     message='Throw in $5, and you got yourself a deal!'
                     timestamp='5 minutes ago'>
                   </Message_Main_User>

                   <hr />

                   <Message_Main_User
                     avatar='https://research.fb.com/wp-content/uploads/2016/11/john-vilk.jpg'
                     author='John Vilk'
                     message='Sounds good! Message me at 978-876-6195'
                     timestamp='About a minute ago'>
                   </Message_Main_User>

                   <hr />

                   <p className="currently_typing">
                     John Vilk is typing...
                   </p>


                   <div className="input-group send-message">
                     <input type="text" className="form-control" placeholder="Send a message..." />
                       <span className="input-group-btn">
                         <button type="submit" className="btn btn-default">
                           <span className="glyphicon glyphicon-envelope"></span>
                         </button>
                       </span>
                   </div>


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
