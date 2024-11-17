declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.svg' {
  import { ReactComponent as ReactComponent } from 'react';
  export { ReactComponent };
}

declare module '*.png' {
  const value: string;
  export default value;
}
