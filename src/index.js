import propsAndCss from './propsAndCss';

const inlineProps = (options) => (originalProps) => {
  const { css, props } = propsAndCss(originalProps);
  return { ...props, css };
};

export default inlineProps;
