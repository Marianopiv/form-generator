import { useState } from 'react';

export function useShow() {
  const [show, setShow] = useState(false);

  const ChangeShow = () => {
    setShow(!show)
  }


  return { ChangeShow, show };
}