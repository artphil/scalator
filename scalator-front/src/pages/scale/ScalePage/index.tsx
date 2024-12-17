import ScaleViewer from "../../../components/ScaleViewer";
import { getScale } from "../../../services/scale.service";
import { Container, Content } from "./styles";

function ScalePage() {
  const { data, axisX, axisY } = getScale();

  return (
    <Container>
      <Content>

        <ScaleViewer data={data} axisX={axisX} axisY={axisY} />
      </Content>
    </Container>
  );
}

export default ScalePage;