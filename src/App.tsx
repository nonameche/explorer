import React from "react"
import Button, { ButtonSize, ButtonType } from "./components/Button/button"
import Alert, { AlertType } from "./components/Alert/alert"

function App() {
  return (
    <div className="App">
      <Button>hello</Button>
      <Button btnType={ButtonType.Link} href="www.baidu.com">
        hello
      </Button>
      <Button btnType={ButtonType.Primary}>hello</Button>
      <Alert alertType={AlertType.Danger}>hello</Alert>
      <Alert alertType={AlertType.Primary} title="嘿嘿额" showClose={true}>
        hello
      </Alert>
    </div>
  )
}

export default App
