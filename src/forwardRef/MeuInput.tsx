import React, {forwardRef} from 'react'

interface MeuInputProps {
  ref: React.RefObject<HTMLInputElement>;
}


const MeuInput  = forwardRef<HTMLInputElement>((props, ref) => {
  return <input type="text" ref={ref} placeholder="Digite algo" {...props}/>
})

export default MeuInput
