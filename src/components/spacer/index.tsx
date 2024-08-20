import { Box } from "@mantine/core";

interface Props {
    width?: number;
    height?: number
}

const Spacer = ({ width, height }: Props) => <Box style={{ width: `${width ?? 0}rem`, height: `${height ?? 0}rem` }}/>

export default Spacer;