import React from "react";
import * as click from "./Click";
import CreatePost from "./CreatePost";

function Contents({state, onChange, nextState}) {
    switch (state) {
        case "default":
            return (
                <div>
                    <div>
                        <strong style={ {fontSize: "50px"}}>환영합니다.<br/></strong>
                        <div>Hello, web<br/></div>
                    </div>
                    <click.createP 
                    onChange={onChange}
                    nextState={nextState}
                    />
                </div>
            );
        case "create":
            return (
                <CreatePost />
            );
        // case "updateP":
        //     return (
        //         <div>
        //             <div>
        //                 <strong style={ {fontSize: "50px"}}>환영합니다.<br/></strong>
        //                 <div>Hello, web<br/></div>
        //             </div>
        //             <click.createP />
        //         </div>
        //     );
        // case "deleteP":
        //     return (
        //         <div>
        //             <div>
        //                 <strong style={ {fontSize: "50px"}}>환영합니다.<br/></strong>
        //                 <div>Hello, web<br/></div>
        //             </div>
        //             <click.createP />
        //         </div>
        //     );
        // case "readP":
        //     return (
        //         <div>
        //             <div>
        //                 <strong style={ {fontSize: "50px"}}>환영합니다.<br/></strong>
        //                 <div>Hello, web<br/></div>
        //             </div>
        //             <click.createP />
        //         </div>
        //     );
        
    }
}

export default Contents;

