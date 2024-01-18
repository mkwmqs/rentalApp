import { Button, IButtonProps } from 'native-base';
import { ReactNode } from "react";

interface ButtonProps extends IButtonProps {
  children: ReactNode;
  autoSize?: boolean;
  color?: string;
}

export function Botao({ children, autoSize = false, color }: ButtonProps){

  return (
    <Button
      w={autoSize ? 'auto' : '100%'}
      bg={color || ' #63E1FD'}
      mt={10}
      borderRadius="lg"
      _text={{ color: 'white' }}
    >
      {children}
    </Button>
  );
};