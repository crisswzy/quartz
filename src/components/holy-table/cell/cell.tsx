import React, { ReactNode, useContext } from 'react';
import { Box, BoxProps } from 'rebass';
import styles from './styles';
import HolyTableContext from '../holy-table.context';

interface Props extends Omit<BoxProps, 'css'> {
  children: ReactNode;
}

const Cell = ({ sx, children, ...props }: Props) => {
  const { padded } = useContext(HolyTableContext);

  const style = {
    ...sx,
    ...styles(padded),
  };
  return (
    <Box as="td" sx={style} {...props}>
      {children}
    </Box>
  );
};
export default Cell;
