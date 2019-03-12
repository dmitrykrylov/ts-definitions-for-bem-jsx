declare module "bem-jsx" {
  export type BlockType = React.ComponentType<any> & {
    [key: string]: React.ComponentType<any>;
  };

  export default function block(
    blockName: string,
    modifiers?: Array<string>,
    config?: {
      elementSeparator?: string;
      modifierSeparator?: string;
      modifierValueSeparator?: string;
      kebabCase?: boolean;
    }
  ): BlockType;
}
