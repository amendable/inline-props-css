import propsAndCssResolver from '../src/propsAndCss'

const propsAndCss = (props) => propsAndCssResolver(props, { applyResolvers: (it) => it });

it('returns correct props and css', () => {
  const { css, props } = propsAndCss({ display: 'block', color: 'red', test: 'me' });
  expect(css).toEqual({ display: 'block', color: 'red' });
  expect(props).toEqual({ test: 'me' });
})

it('returns correct props and css when other css is specified last', () => {
  const { css, props } = propsAndCss({ display: 'block', css: { display: 'none' } });
  expect(css).toEqual({ display: 'none' });
})

it('returns correct props and css when other css is specified first', () => {
  const { css, props } = propsAndCss({ css: { display: 'none' }, display: 'block' });
  expect(css).toEqual({ display: 'block' });
})

it('returns correct props and css when using hover state', () => {
  const { css, props } = propsAndCss({
    backgroundColor: 'red',
    hoverBackgroundColor: 'green',
    color: 'green',
    hoverColor: 'red',
  });
  expect(css).toEqual({
    backgroundColor: 'red',
    color: 'green',
    '&:hover': {
      backgroundColor: 'green',
      color: 'red',
    }
  });
})

it('returns correct props and css when using placeholder state', () => {
  const { css, props } = propsAndCss({
    color: 'blue',
    placeholderColor: 'green',
  });
  expect(css).toEqual({
    color: 'blue',
    '::placeholder': {
      color: 'green',
    }
  });
})
