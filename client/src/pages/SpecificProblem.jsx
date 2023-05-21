import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import {cpp} from "@codemirror/lang-cpp";

function SpecificProblem(){
    const onChange = React.useCallback((value, viewUpdate) => {
        console.log('value:', value);
    }, []);
    return (
        <div className={"w-10/12 h-screen mx-auto flex"}>
            <div className={"w-full h-3/4 flex-col text-center my-auto"}>
                <h1>1. Find first and last occurrence</h1>
            </div>
            <div className={"w-full h-full border-2 flex-col text-center my-auto"}>
                <h4>Write your code here:</h4>
                <CodeMirror
                    value=""
                    height="90vh"
                    extensions={[cpp()]}
                    onChange={onChange}
                />
            </div>
        </div>
    );
};

export default SpecificProblem;