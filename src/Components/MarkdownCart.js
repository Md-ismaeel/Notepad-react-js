import { useState } from 'react';
import MarkdownEditor from '@uiw/react-markdown-editor';

export const MarkdownComponents = () => {
    const [content, setContent] = useState('');

    return (
        <>
            <div className='right-container'>
                <MarkdownEditor
                    value=""
                    placeholder={"#Enter a tittle"}
                    height="34.5rem"
                    enablePreview={true}
                />
            </div>
        </>

    );
}