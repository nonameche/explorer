import React from "react"
import Button from "./components/Button/button"
import Alert, { AlertType } from "./components/Alert/alert"

function App() {
  return (
    <div className="App">
      <Button>hello</Button>
      <Button btnType="link" href="www.baidu.com">
        hello
      </Button>
      <Button btnType="danger">hello</Button>
      {/* <Alert alertType={AlertType.Danger}>hello</Alert> */}
      <Alert alertType={AlertType.Warning} title="嘿嘿额" showClose={true}>
        hello
      </Alert>
    </div>
  )
}

export default App
