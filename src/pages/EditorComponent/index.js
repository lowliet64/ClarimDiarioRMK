import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Header from '../../components/Header'
import './index.css'
class EditorComponent extends React.Component {

    addTag = (event) => {
        console.log(event.target.value)

    }

    render() {
        return (
            <div className="App">
                <Header />
                <div className="form-editor-container">
                    <h2>Cadastrar Artigo</h2>

                    <label htmlFor="">Titulo</label>
                    <input type="text" />
                    <label htmlFor="">Subtitulo</label>
                    <input type="text" />
                    <label htmlFor="">Tags</label>
                    <input type="text" onChange={this.addTag} />
                    <label htmlFor="">Conteúdo</label>
                    <CKEditor
                        editor={ClassicEditor}
                        data="<p>Hello from CKEditor 5!</p>"
                        onReady={editor => {
                            // You can store the "editor" and use when it is needed.
                            console.log('Editor is ready to use!', editor);
                        }}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            console.log({ event, editor, data });
                        }}
                        onBlur={(event, editor) => {
                            console.log('Blur.', editor);
                        }}
                        onFocus={(event, editor) => {
                            console.log('Focus.', editor);
                        }}
                    />
                </div>
            </div>
        );
    }

}

export default EditorComponent;