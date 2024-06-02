import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'
function RTE({name,control,defaultValue = ""}) {
  return (
    <Controller
    name= {name || "content"}
    control={control}
    render={({field: {onChange}})=> (
        <Editor
        apiKey='9t0xm7lnor4grxqdglzd0g5ndxg2pkttzhsb99oo9vxjkd7f'
        initialValue={defaultValue}
        init={{
            initialValue: defaultValue,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}
        />
    )}
    
    />
  )
}

export default RTE