"use client";

import React, { JSX } from "react";

type AnyProps = Record<string, unknown>;
type StyleFunction<Props extends AnyProps> = (props: Props) => string;
type Interpolation<Props extends AnyProps> = StyleFunction<Props> | string;

type StyledComponent<
  Tag extends keyof JSX.IntrinsicElements,
  Props extends AnyProps = AnyProps
> = React.ForwardRefExoticComponent<
  Props & JSX.IntrinsicElements[Tag] & React.RefAttributes<Element>
>;

function interpolateStyles<Props extends AnyProps>(
  strings: TemplateStringsArray,
  interpolations: Interpolation<Props>[]
): StyleFunction<Props> {
  return (props: Props) => {
    return strings
      .reduce((acc, str, i) => {
        const interpolation = interpolations[i];
        const value =
          typeof interpolation === "function"
            ? interpolation(props)
            : interpolation || "";
        return acc + str + value;
      }, "")
      .trim();
  };
}

function createStyledComponent<
  Tag extends keyof JSX.IntrinsicElements,
  Props extends AnyProps = AnyProps
>(tag: Tag, styleFunction: StyleFunction<Props>): StyledComponent<Tag, Props> {
  const Component = React.forwardRef<
    Element,
    Props & JSX.IntrinsicElements[Tag]
  >(({ className, ...props }, ref) => {
    const generatedClassName = styleFunction(props as unknown as Props);
    const combinedClassName = `${generatedClassName} ${className || ""}`.trim();
    return React.createElement(tag, {
      ...props,
      className: combinedClassName,
      ref,
    });
  });

  Component.displayName = `Styled(${tag})`;
  return Component as StyledComponent<Tag, Props>;
}

type StyledTags = {
  [Tag in keyof JSX.IntrinsicElements]: <Props extends AnyProps = AnyProps>(
    strings: TemplateStringsArray,
    ...interpolations: Interpolation<Props>[]
  ) => StyledComponent<Tag, Props>;
};

const styled = new Proxy({} as StyledTags, {
  get: (_, tag: string) => {
    return <Props extends AnyProps = AnyProps>(
      strings: TemplateStringsArray,
      ...interpolations: Interpolation<Props>[]
    ) => {
      const styleFunction = interpolateStyles<Props>(strings, interpolations);
      return createStyledComponent<keyof JSX.IntrinsicElements, Props>(
        tag as keyof JSX.IntrinsicElements,
        styleFunction
      );
    };
  },
});

export { styled };
