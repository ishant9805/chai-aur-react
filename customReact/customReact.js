function customRender(reactElement, container) {
    // Version 1
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    // container.appendChild(domElement)

    // Version 2
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props) {
        if (prop === 'children') continue
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank',
    },
    children: 'Google',
}
const reactElementAnother = {
    type: 'input',
    props: {
        type: 'number',
        name: 'google',
        placeholder: 'Google',
    },
    children: '',
}

const mainContainer = document.getElementById('root')

customRender(reactElement, mainContainer)
customRender(reactElementAnother, mainContainer)