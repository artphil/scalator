import { stringToHexColor } from "../../helpers/color.helper";
import { getScale } from "../../services/scale.service";
import { Cel, Col, Table } from "./styles";

interface Props {
  data: any
}

function ScaleViewer(props: Props) {
  const { data, axisX, axisY } = getScale();

  function dateFormat(strDate: string) {
    const date = new Date(strDate);
    return date.toLocaleDateString('pt-BR', { timeZone: "UTC" })
  }

  if (!data || !axisY || !axisX || data.length !== axisY.length || data[0].length !== axisX.length) {
    return (
      <p>Dados inválidos</p>
    )
  }

  return (
    <Table cols={axisX.length}>
      <Col></Col>
      {axisX.map((title) => <Col key={title}>{title}</Col>)}
      {data.map((row, index) => (
        <>
          <Cel>{dateFormat(axisY[index])}</Cel>
          {row.map((name, colIndex) => <Cel key={`${index},${colIndex}`} color={stringToHexColor(name)}>{name}</Cel>)}
        </>
      ))}
    </Table>
  );
}

export default ScaleViewer;