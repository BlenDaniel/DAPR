import { FC } from 'react';
import { Style } from '../../model/style';


interface Props {
  className?: string
  pdfMode?: boolean
  children?: string
  style?: Style
  

}

const Text: FC<Props> = ({ className, children }) => {
  return (
    <>
      (
        <span className={'span ' + (className ? className : '')}>{children}</span>
      )
    </>
  )
}

export default Text
