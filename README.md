# Inline Props CSS

This resolver merges all the React props that match the names of styling props into the `css` prop.

## Usage
```jsx sandbox
import { render } from 'react-dom'
import Box, { AmendableProvider } from '@amendable/core'
import inlinePropsCss from '@amendable/inline-props-css'

const resolvers = [
  inlinePropsCss(),
]

render(
  <AmendableProvider resolvers={resolvers}>
    <Box
      display="flex"
      backgroundColor="red"
      padding={64}
      paddingBottom={34}
      color="blue"
      hoverBackgroundColor="blue"
      hoverColor="red"
    >
      Amendable
    </Box>
  </AmendableProvider>
)
```

This will be resolved to

```jsx
  <Box
    css={{
      display: 'flex',
      backgroundColor: 'red',
      padding: 64,
      paddingBottom: 34,
      color: 'blue',
      '&:hover': {
        backgroundColor: 'blue',
        color: 'red'
      }
    }}
  >
    Amendable
  </Box>
```


## Supported props

It uses [inline-style-properties](https://github.com/amendable/inline-style-properties) underneath for prop matching.

Here are all the styling props it supports (it supports most):
[Supported styling properties](https://github.com/amendable/inline-style-properties/blob/master/src/inlineProperties.json)
