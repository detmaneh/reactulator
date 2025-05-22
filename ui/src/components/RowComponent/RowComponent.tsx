import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { CustomArrayProps, CustomButtonProps } from "../../util/types";
import CustomButton from "../CustomButton/CustomButton";

const action = {
  backgroundColor: "purple",
  height: "100px",
};
const value = {
  backgroundColor: "grey",
};

const colStyle = {
  height: "10vh",
  width: "25%",
};
const doubleColStyle = {
  height: "10vh",
  width: "50%",
};
// const rowStyle = {
//   border: '1px solid rgba(0, 0, 0, 50)',
//   display:"flex",
//   width: "100%",
//   height: "10%"
// };


const rowStyle = {
  display: "flex",
  padding: "1%",
  width: "100%",
  height: "100%"
};

const RowComponent = ({ array }: CustomArrayProps) => {
  return (
    <>
      <Row style={rowStyle}>
        {array.map(({ value, size, textValue, type, onClick, isDoubleSize, isRedColored, isColored }: CustomButtonProps) => (
          <Col sm key={value} style={isDoubleSize ? doubleColStyle : colStyle}>
            <CustomButton key={value} value={value} onClick={onClick} textValue={textValue}
              type={type} pos={0} size={size} isDoubleSize={isDoubleSize}
              isRedColored={isRedColored} isColored={isColored}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default RowComponent;
