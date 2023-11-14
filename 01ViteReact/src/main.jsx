import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

function MyApp() {
  return (
    <div>
      <h1>Custom My App | Chai</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://www.google.com',
//       target: '_blank',
//   },
//   children: 'Google',
// }

const anotherElement = (
  <a href="https://www.google.com" target='_blank'>google</a>
)

const another_user = "ChaiHiChai"

const reactElement = React.createElement(
  "a",
  {
    href: "https://www.google.com",
    target: "_blank"
  },
  'click me',
  another_user
)

ReactDOM.createRoot(document.getElementById('garam-chai'))
.render(
    reactElement
)