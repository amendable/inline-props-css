import propsAndCss from './propsAndCss';

const inlineProps = (options) => (originalProps, { applyResolvers }) => {
  const { css, props } = propsAndCss(originalProps, { applyResolvers });
  return { ...props, css };
};

export default inlineProps;
