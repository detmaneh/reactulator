export type CustomButtonProps = {
    value: string,
    textValue: string,
    type: string,
    isDoubleSize?: boolean,
    isColored?: boolean,
    isRedColored?:boolean,
    pos: number,
    size: number,
    onClick: (e: any) => void;
    // children: React.ReactNode;
  };


  export type CustomArrayProps = {
    array: CustomButtonProps[];
  };
