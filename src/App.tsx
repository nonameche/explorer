import React from "react"
import Button from "./components/Button/button"
import input from "./components/Input/input"
import Upload from "./components/Upload/upload"

import Alert from "./components/Alert/alert"
import Icon from "./components/Icon/icon"

function App() {
  return (
    <div className="App">
      <Button>hello</Button>
      <Button btnType="link" href="www.baidu.com">
        hello
      </Button>
      <Button btnType="danger">hello</Button>
      {/* <Alert alertType={AlertType.Danger}>hello</Alert> */}
      <Alert alertType="warning" title="嘿嘿额" showClose={true}>
        hello
      </Alert>
      <input></input>
      <Upload action="www.baidu.com">上传</Upload>
      <Icon icon="upload" size="5x" theme="secondary" />
    </div>
  )
}

export default App
