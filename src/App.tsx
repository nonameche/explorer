import React from "react"
import Button, { ButtonSize, ButtonType } from "./components/Button/button"

function App() {
  return (
    <div className="App">
      <Button>hello</Button>
      <Button btnType={ButtonType.Link} href="www.baidu.com">
        hello
      </Button>
      <Button btnType={ButtonType.Parmary}>hello</Button>
      <h1>111</h1>
      <h2>1111</h2>
      <h3>ere</h3>
      <code>cosnt a = 'b'</code>
    </div>
  )
}

export default App
